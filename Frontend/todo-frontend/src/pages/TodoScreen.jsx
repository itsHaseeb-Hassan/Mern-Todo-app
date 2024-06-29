import React,{useState} from 'react'
import FormInput from '../components/FormInput'
import FormButton from '../components/FormButton'
import TaskTable from '../components/TaskTable'

const TodoScreen = () => {
  const [formdata,setformdata]=useState({
    task:''
  })
  const handleInput=(e)=>{
    const {name,value}=e.target
    setformdata({...formdata,[name]:value})
  }

  const handleTask=()=>{
    console.log(formdata)
  }
  return (
    <div>
       <h1 className="text-center p-9 text-3xl uppercase">Add Todo</h1>
       <div className="mx-auto w-[30%] h-[50%] p-4 bg-gray-300 rounded-md backdrop-filter backdrop-blur-md bg-opacity-20">
       <FormInput text="Task" type="text" placeholder="Enter your Task" value={formdata.task} name="task" onChange={handleInput}/>
       <FormButton text="Add" onClick={handleTask}/>
        </div>
        <TaskTable />
    </div>
  )
}

export default TodoScreen