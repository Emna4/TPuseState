import React, {useState} from 'react';
import Task from '../task/Task.js'

function TasksList({Tasks,deleteTask, updateTask} ) {
   // const sayHello = () =>{ alert("hello")}
   const [isVisible,setIsVisible]=useState(true)
   const toggleVisibility=()=>{
     setIsVisible(!isVisible)
   }
 
  return (
    <div className="TaskList">
      <button onClick={toggleVisibility}>toggle Visibility</button>
     {isVisible && Tasks.map((task , index )=> (
        <Task key={index} id={task.id}  title={task.title} duration={task.duration} type = {task.type} date={task.date} description={task.description} deleteTask={deleteTask} updateTask={updateTask} />
          
          

      ))
     }

    </div>
  );
}

export default TasksList;
