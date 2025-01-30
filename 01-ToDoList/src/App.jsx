import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [task, setTask] = useState("")
  const [tasks, setTasks] = useState([])

  //Add task
  const AddTask = () => {
    if(task.trim().length>0 && !tasks.some(t => t.task === task)){
      setTasks([...tasks, {task:task,complete:false}])
      setTask("")
    }
  }

  //Delete task
  const DeleteTask = (t) => {
    setTasks(tasks.filter(t1 => t1.task !==t))
  }

  //Complete task
  const ToggleComplete = (text) => {
    setTasks(
      tasks.map((t) =>
        t.task === text ? { ...t, complete: !t.complete } : t
      )
    );
  };

  
  return (
    <div className='container'>
      <h1>Task List</h1>
      <hr />
      <div>
        <div className='add-task'>
        <span>New task: </span>
        <input type="text" value={task} onChange={(e) => setTask(e.target.value)}
          placeholder="Nueva tarea..." />
        <button className='add-button' onClick={AddTask}>Add Task</button>
        </div>
        <hr />
        <ul>
          {tasks.map(t => (
          <li key={t.task} className={t.complete ? 'complete' : ''} >
            <span onClick={() => ToggleComplete(t.task)}>{t.task}</span>
            <button onClick={ () =>DeleteTask(t.task)}>Delete</button>
            </li>
        ))}
        </ul>
      </div>
    </div>
  )
}

export default App
