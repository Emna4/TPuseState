import React, { useState } from 'react'
import './Task.css'
 
function Task ({title ,duration,type,date,description,id,deleteTask,updateTask}){
  const [updateMode,setUpdateMode]=useState(false)
  const [titleToUpdate,setTitleToUpdate]=useState(title)
  const [durationToUpdate,setDurationToUpdate]=useState(duration)
  const [typeToUpdate,setTypeToUpdate]=useState(type)
  const [dateToUpdate,setDateToUpdate]=useState(date)
  const [descriptionToUpdate,setDescriptionToUpdate]=useState(description)
  const handleUpdateTask = () =>{
    updateTask(id, titleToUpdate,durationToUpdate,typeToUpdate,dateToUpdate,descriptionToUpdate)
    setUpdateMode(false)
  }
  
  return (
    <div className="task">
      {!updateMode ? (
        <>
          <div>
            <div className="title">
              {title} ({duration} mn) 
            </div>
            <p>{type} - {date}</p>
            <div>{description} </div>
          </div>
          <div className="actions">
            <div>
              <button onClick={() => deleteTask(id)}>delete</button>
              <button onClick={()=>setUpdateMode(true)}>update</button>
            </div>
          </div>
        </>
      ) : (
        <div>
          <input
            type="text"
            name="title"
            value={titleToUpdate}
            onChange={e => setTitleToUpdate(e.target.value)}
          />
          <input
            type="number"
            value={durationToUpdate}
            name="duration"
            onChange={e => setDurationToUpdate(e.target.value)}
          /> 
          <input
            type="text"
            value={typeToUpdate}
            name="type"
            onChange={e => setTypeToUpdate(e.target.value)}
          />
          <input
            type="date"
            value={dateToUpdate}
            name="date"
            onChange={e => setDateToUpdate(e.target.value)}
          />
          <input
            type="text"
            value={descriptionToUpdate}
            name="description"
            onChange={e => setDescriptionToUpdate(e.target.value)}
          />
          <button className="button" onClick={handleUpdateTask}>
            Update a task
          </button>
          </div> 
      )}
    </div>
  )
}
 
  

export default Task
