import React, { useState, useEffect } from 'react';
import FormInput from '../components/FormInput';
import FormButton from '../components/FormButton';
import TaskTable from '../components/TaskTable';
import { getTodos, createTodo } from '../Lib/API/todoApi';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setTodos, addTodo } from '../Redux/slice/TodoSlice';
import { setLoginInfo } from '../Redux/slice/UserSlice';

const TodoScreen = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userId = useSelector((state) => state.user.loginInfo.id);
  const [formdata, setFormdata] = useState({ task: '' });

  const handleInput = (e) => {
    const { name, value } = e.target;
    setFormdata({ ...formdata, [name]: value });
  };

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const response = await getTodos(userId);
        console.log("Response in fetchTodos:", response);
        dispatch(setTodos(response));
      } catch (error) {
        console.error("Error fetching todos:", error);
      }
    };
    if (userId) {
      fetchTodos();
    }
  }, [dispatch, userId]);

  const handleTask = async (userId) => {

    const data = { ...formdata, userId };
    console.log("Data in handleTask:", data);
    try {
      const response = await createTodo(data); // Ensure createTodo sends a POST request with data in the body
      console.log("Response in handleTask:", response);
      dispatch(addTodo(response)); // Use addTodo action to append the new todo
    } catch (error) {
      console.log("Error in handleTask:", error);
    }
  
    setFormdata({ task: '' });
  };



  const handleLogout = () => {
    dispatch(setLoginInfo({}));
    navigate('/');
  };

  return (
    <div>
      <FormButton text="Logout" onClick={handleLogout} />
      <h1 className="text-center p-9 text-3xl uppercase">Add Todo</h1>
      <div className="mx-auto w-[30%] h-[50%] p-4 bg-gray-300 rounded-md backdrop-filter backdrop-blur-md bg-opacity-20">
        <FormInput text="Task" type="text" placeholder="Enter your Task" value={formdata.task} name="task" onChange={handleInput} />
        <FormButton text="Add Task" onClick={() => handleTask(userId)} />
      </div>
      <TaskTable />
    </div>
  );
};

export default TodoScreen;
