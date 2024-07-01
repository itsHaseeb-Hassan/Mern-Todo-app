import React, { useState, useEffect } from 'react';
import FormInput from '../components/FormInput';
import FormButton from '../components/FormButton';
import TaskTable from '../components/TaskTable';
import { getTodos } from '../Lib/API/todoApi';
import { useDispatch, useSelector } from 'react-redux';
import { setTodos } from '../Redux/slice/TodoSlice';

const TodoScreen = () => {
  console.log("user id is",userId)
  console.log("todos in redux",todos);
  
  const [formdata, setformdata] = useState({ task: '' });

  const handleInput = (e) => {
    const { name, value } = e.target;
    setformdata({ ...formdata, [name]: value });
  };

  const handleTask = () => {
    console.log(formdata);
    // Add logic to handle adding a new task
  };

  return (
    <div>
      <h1 className="text-center p-9 text-3xl uppercase">Add Todo</h1>
      <div className="mx-auto w-[30%] h-[50%] p-4 bg-gray-300 rounded-md backdrop-filter backdrop-blur-md bg-opacity-20">
        <FormInput text="Task" type="text" placeholder="Enter your Task" value={formdata.task} name="task" onChange={handleInput} />
        <FormButton text="Add" onClick={handleTask} />
      </div>
      <TaskTable />
    </div>
  );
};

export default TodoScreen;
