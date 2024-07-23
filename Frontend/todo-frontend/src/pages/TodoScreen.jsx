import React, { useState, useEffect } from 'react';
import FormInput from '../components/FormInput';
import FormButton from '../components/FormButton';
import TaskTable from '../components/TaskTable';
import { getTodos, createTodo, deleteTodo, updateTodo,completeTodo } from '../Lib/API/todoApi';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setTodos, addTodo, deleteTodo as deleteTodoAction, updateTodo as updateTodoAction,completeTodos } from '../Redux/slice/TodoSlice';
import { setLoginInfo } from '../Redux/slice/UserSlice';
import NavBar from '../components/NavBar';

const TodoScreen = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userId = useSelector((state) => state.user.loginInfo.id);
  const todos = useSelector((state) => state.todo.todos.todos);
  console.log("todos in table bhaloo", todos);

  const [formdata, setFormdata] = useState({ task: '' });
  const [isUpdate, setIsUpdate] = useState(false);
  const [updateId, setUpdateId] = useState(null);

  const handleInput = (e) => {
    const { name, value } = e.target;
    setFormdata({ ...formdata, [name]: value });
  };

  const fetchTodos = async () => {
    try {
      const response = await getTodos(userId);
      console.log("Response in fetchTodos:", response);
      dispatch(setTodos(response));
    } catch (error) {
      console.error("Error fetching todos:", error);
    }
  };

  const handleTask = async (userId) => {
    const data = { ...formdata, userId };
    console.log("Data in handleTask:", data);
    try {
      const response = await createTodo(data);
      console.log("Response in handleTask:", response);
      dispatch(addTodo(response.savedTodo));
      if(response === true){
        fetchTodos();
      }
    } catch (error) {
      console.log("Error in handleTask:", error);
    }
    setFormdata({ task: '' });
  };

  const handleDelete = async (id) => {
    try {
      const response = await deleteTodo(id);
      console.log("Response in handleDelete:", response);
      if(response.deletedTodo._id === id){
        dispatch(deleteTodoAction(id));
        fetchTodos();
      }
    } catch (error) {
      console.error("Error deleting todo:", error);
    }
  };
  useEffect(() => {
    if (userId) {
      fetchTodos();
    }
  }, [dispatch, userId]);
  const handleUpdate = async () => {
    const data = { id: updateId, task: formdata.task };
    console.log("Data in handleUpdate:", data);
  
    try {
      const response = await updateTodo(data);
      console.log("Response in handleUpdate:", response);
  
      if (response && response.updatedTodo && response.updatedTodo._id === updateId) {
        dispatch(updateTodoAction(response.updatedTodo));
        fetchTodos();
      } else {
        console.warn("Updated todo ID does not match data ID");
      }
    } catch (error) {
      console.error("Error updating todo:", error);
    }
  
    setIsUpdate(false);
    setFormdata({ task: '' });
    setUpdateId(null);
  };
  

  const prepareUpdate = (todo) => {
    setFormdata({ task: todo.task });
    setIsUpdate(true);
    setUpdateId(todo._id);
  };

  const handleComplete = async (todo) => {
    const id = todo._id;
    console.log("ID in handleComplete:", id);
    try {
      const response = await completeTodo(id);
      console.log("Response in handleComplete:", response);

      if (response && response.updatedTodo && response.updatedTodo._id === id) {
        dispatch(completeTodos(response.updatedTodo.completed));
        fetchTodos();
      } else {
        console.warn("Completed todo ID does not match data ID");
      }
    } catch (error) {
      console.error("Error completing todo:", error);
    }
  };


  const handleLogout = () => {
    dispatch(setLoginInfo({}));
    navigate('/');
  };

  return (
    <div>
      <NavBar handleLogout={handleLogout}/>
      <h1 className="text-center p-9 text-3xl uppercase">Add Todo</h1>
      <div className="mx-auto w-[30%] h-[50%] p-4 bg-gray-300 rounded-md backdrop-filter backdrop-blur-md bg-opacity-20">
        <FormInput text="Task" type="text" placeholder="Enter your Task" value={formdata.task} name="task" onChange={handleInput} />
        {isUpdate ? (
          <FormButton text="Update Todo" onClick={handleUpdate} />
        ) : (
          <FormButton text="Add Task" onClick={() => handleTask(userId)} />
        )}
      </div>
      <TaskTable todos={todos} handleDelete={handleDelete} handleUpdate={prepareUpdate} handleComplete={handleComplete} />
    </div>
  );
};

export default TodoScreen;
