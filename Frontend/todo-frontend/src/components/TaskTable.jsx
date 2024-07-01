import React from 'react';
import FormButton from './FormButton';
import { deleteTodo } from '../Lib/API/todoApi';
import { useDispatch, useSelector } from 'react-redux';
import { deleteTodo as deleteTodoAction } from '../Redux/slice/TodoSlice';

const TaskTable = () => {
    const todos = useSelector((state) => state.todo.todos.todos);
    const dispatch = useDispatch();
    console.log("todos in table bhaloo", todos);
    
    const handleDelete = async (id) => {
        try {
            const response = await deleteTodo(id);
            if (response.status === 200) {
                console.log("Todo deleted successfully:", response.data);
                dispatch(deleteTodoAction(id));
            }
        } catch (error) {
            console.error("Error deleting todo:", error);
        }
    }

    return (
        <div className="w-[70%] mx-auto my-5 pb-7">
            <table className="min-w-full bg-white">
                <thead>
                    <tr>
                        <th className="py-2 px-4 bg-gray-200 border-b-2 border-gray-300 text-left">Id</th>
                        <th className="py-2 px-4 bg-gray-200 border-b-2 border-gray-300 text-left">Task</th>
                        <th className="py-2 px-4 bg-gray-200 border-b-2 border-gray-300 text-left">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {todos?.map((todo, index) => (
                        <tr className="hover:bg-gray-100" key={index}>
                            <td className="py-2 px-4 border-b border-gray-300">{todo?._id}</td>
                            <td className="py-2 px-4 border-b border-gray-300">{todo?.task}</td>
                            <td className="py-2 px-4 border-b border-gray-300">
                                <div className="flex space-x-2">
                                    <FormButton text="Delete" onClick={() => handleDelete(todo._id)} />
                                    <FormButton text="Update" />
                                    <FormButton text="Complete" />
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default TaskTable;
