import React from 'react';
import FormButton from './FormButton';
const TaskTable = ({ todos, handleDelete, handleUpdate, handleComplete }) => {
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
                            <td className="py-2 px-4 border-b border-gray-300">{index+1}</td>
                            <td className={`${todo?.completed ? 'line-through' : ''} py-2 px-4 border-b border-gray-300`}>{todo?.task}</td>
                            <td className="py-2 px-4 border-b border-gray-300">
                                <div className="flex space-x-2">
                                    <FormButton text="Delete" onClick={() => handleDelete(todo._id)} />
                                    <FormButton text="Update" onClick={() => handleUpdate(todo)} />
                                    <FormButton text="Complete" onClick={() => handleComplete(todo)} />
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
