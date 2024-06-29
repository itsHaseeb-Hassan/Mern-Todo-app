import React from 'react'

const TaskTable = () => {
  return (
    <div className="w-1/2 mx-auto my-5">
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="py-2 px-4 bg-gray-200 border-b-2 border-gray-300 text-left">Task</th>
            <th className="py-2 px-4 bg-gray-200 border-b-2 border-gray-300 text-left">Status</th>
            <th className="py-2 px-4 bg-gray-200 border-b-2 border-gray-300 text-left">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr className="hover:bg-gray-100">
            <td className="py-2 px-4 border-b border-gray-300">Row 1, Cell 1</td>
            <td className="py-2 px-4 border-b border-gray-300">Row 1, Cell 2</td>
            <td className="py-2 px-4 border-b border-gray-300">Row 1, Cell 3</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default TaskTable