import React, { useState, useCallback } from 'react';
import './App.css';
import TaskForm from './components/taskform/Taskform.js';
import TasksList from './components/tasksList/TasksList.js';


function App() {
  
const [Tasks, setTasks] =useState([
    { id:"1",
      title:"learn html" ,
      duration :60,
      type: "IT",
      date: "2020-03-06",
      description : "fdsssssssssssssssssfdsfsdfsdf"
      
     } ,
     {id:"2",
      title:"learn uml" ,
      duration :60,
      type: "IT", 
      date: "2020-03-06",
      description : "dfsfffffffffffffffsfsfsdf"
      
     } ,
     {id:"3",
      title:"learn js" ,
      duration :60,
      type: "IT", 
      date: "2020-03-06",
      description : "qsdqsdqdqsdqdqdqdsdqsdqsdqsdq"
}])
const addTask=(title, duration,type,date,description)=>{
  setTasks(previousTasks=>[...previousTasks,{title, duration, type,date,description}])
}
const deleteTask=(id)=>{
  const newTasks= Tasks.filter(task=>task.id!==id)
   setTasks(newTasks)
}
const updateTask=(id,title, duration,type,date,description)=>{
  const newTasks= Tasks.map(task=>task.id === id?({title, duration,type,date,description}):task)
   setTasks(newTasks)
}
const memoisedCallBack = useCallback(addTask,[])
  return (
    <div className="App">
     <TaskForm addTask={memoisedCallBack}/>
    <TasksList Tasks={Tasks}
    deleteTask={deleteTask}
    updateTask={updateTask}
    />
    </div>
  );
}

export default App;
