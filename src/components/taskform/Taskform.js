import React, {useState, useRef, memo} from 'react'
import './Taskform.css'

function TaskForm ({addTask}){
    const [title,setTitle]=useState("learn")
    const [duration,setDuration]=useState(0)
    const [type,setType]=useState("type")
    const [date,setDate]=useState("")
    const [description,setDescription]=useState("description")
    
    const inputTitle=useRef(null)
    const handleAddTask=()=>{
        addTask(title, duration,type,date,description)
        setTitle("learn")
        setDuration(0)
        setType("")
        setDate("")
        setDescription("")
        inputTitle.current.focus()
    }
    return (
    <div className="task-form">
        <input 
        type="text"
        name="title"
        ref={inputTitle}
        value={title}
        onChange={e=>setTitle(e.target.value)}/>
        <input 
        type="number"
        name="duration"
        value={duration}
        onChange={e=>setDuration(e.target.value)}/>
        <input 
        type="text"
        name="type"
        value={type}
        onChange={e=>setType(e.target.value)}/>
        <input 
        type="date"
        name="date"
        value={date}
        onChange={e=>setDate(e.target.value)}/>
        <input 
        type="text"
        name="description"
        value={description}
        onChange={e=>setDescription(e.target.value)}/>
        <button className="button" onClick={handleAddTask}> Add a Task</button>
        

    </div>
        
    )
}
export default memo(TaskForm) 