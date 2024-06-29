import React from 'react';
import FormButton from './FormButton';
import { deleteTodo } from '../Lib/API/todoApi';
import { useSelector, useDispatch } from 'react-redux';
import { DeleteTodo } from '../Redux/slice/TodoSlice';
const TaskTable = ({ todos }) => {
  const dispatch = useDispatch();
  const handleDelete = async (id) => {
    console.log(id);
    try {
      const response = await deleteTodo(id);
      console.log(response);
      dispatch( DeleteTodo(id) );
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div className="w-[70%] mx-auto my-5">
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="py-2 px-4 bg-gray-200 border-b-2 border-gray-300 text-left">Id</th>
            <th className="py-2 px-4 bg-gray-200 border-b-2 border-gray-300 text-left">Task</th>
            <th className="py-2 px-4 bg-gray-200 border-b-2 border-gray-300 text-left">Action</th>
          </tr>
        </thead>
        <tbody>
          {
            todos.map((todo) => {
              return (
                <tr className="hover:bg-gray-100" key={todo._id}>
                  <td className="py-2 px-4 border-b border-gray-300">{todo._id}</td>
                  <td className="py-2 px-4 border-b border-gray-300">{todo.task}</td>
                  <td className="py-2 px-4 border-b border-gray-300">
                    <div className="flex space-x-2">
                      <FormButton text="Delete" onClick={() => {handleDelete(todo._id)}} />
                      <FormButton text="Update" />
                      <FormButton text="Complete" />
                    </div>
                  </td>
                </tr>
              );
            })
          }
        </tbody>
      </table>
    </div>
  );
};

export default TaskTable;
