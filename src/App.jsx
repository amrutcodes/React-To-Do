import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

function App() {
  const [todo, setTodo] = useState([])
  

  const[newTask, setNewTask]=useState("")
  const name ="amrut";
  const letter="j"
 
const task=[
  "Installing react",
  "understanding JSX",
  "Installing Tailwind",
  "Tailwing Css classes to style",
  "Dynamic to-do list",
  "Im learning map methods and rendering homie"
];

const handleSubmit=(e)=>{
  e.preventDefault();
  setTodo(todo=> [...todo,newTask]);
  setNewTask("");
}

  return (
    <div className=' h-screen bg-emerald-400 p-5 '>
 
 <h1 className="text-3xl font-bold text-center">
Learning react 
</h1>
<div className='bg-white p-5 m-3 rounded-lg shadow-md'>
<p className='text-3xl p-2'><b>My Tasks Today :</b></p>


<form className='m-2 flex gap-3' onSubmit={handleSubmit}>
  <input placeholder='Enter the task' 
  type='text'
  value={newTask}
  className=' px-1 py-2 border-gray-700 border rounded-lg w-96'
onChange={(e)=> {setNewTask(e.target.value)}}
  >
</input>



<button className='p-2 bg-green-800 text-white font-bold rounded-lg hover:bg-green-700'>
    Add Task
</button>

</form>
  <ul >
    {todo.map((ele, index)=> {
      return(
        <li key={index}  className=' text-2xl font-light'>{ele}</li>
      )

    })}
</ul>
</div>
    </div>
  )
}

export default App
