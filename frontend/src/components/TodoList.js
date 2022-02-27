import {useState} from 'react'
import MyApiService from '../api/services/MyApiService'
import './todoList.css'
import { IoClose } from "react-icons/io5";
import { BsCheckLg } from "react-icons/bs";
import { FaRegEdit } from "react-icons/fa";



const TodoList = () => {

    const [data, setData] = useState([])
    const [name, setName] = useState('')
    const [task, setTask] = useState('')
    const [newTask, setNewTask] = useState('')
 

   
  function selectHandler(selectValue) {
    if (selectValue === 'completed') {
      showCompletedTasks()
    } else if (selectValue === 'uncompleted') {
      showUncompletedTasks()
    } else {
      showAllTasks()
    }  
  }

  function showCompletedTasks() {
    MyApiService.getCompleted()
    .then(response => {
      setData(response.data)
    })
    .catch(error => console.log(error))
  }

  function showUncompletedTasks() {
    MyApiService.getUncompleted()
    .then(response => {
      setData(response.data)
    })
    .catch(error => console.log(error))
  }

  function showAllTasks() {
    MyApiService.todoArray() 
    .then(response => {
      setData(response.data)
    })
    .catch(error => console.log(error))
  }
   
    function updateNewTask(id, newTask) {
      MyApiService.updateTask(id, newTask)
      .then(response => {
        setData(response.data)
        setNewTask('')
        
      })
   
   }
   

    function updateEditMode(id) {
      MyApiService.updateEditMode(id)
      .then(response => {
        console.log(response.data)
        setData(response.data)
      
      })
      .catch(error =>{console.log(error)})
    }

    function addTask() {
      MyApiService.createTask(task, name)
      .then(response => {
        setData(response.data)
      })
      .catch(error => console.log(error))
      setTask('')
      setName('')
    }

    function deleteTask(id) {
      console.log(id)
       MyApiService.deleteTask(id)
      .then(response => {
        setData(response.data)
      
         console.log(response.data)
         
       
      })
      .catch(error => console.log(error))
    
    }


    function updateDone(id) {
        console.log(id)
        MyApiService.updateTaskDone(id)
        .then(response => {
          console.log(response.data)
          setData(response.data)

          
        })
    }

    function updateDoneAgain(id) {
        console.log(id)
        MyApiService.updateTaskDoneAgain(id)
        .then(response => {
          console.log(response.data)
          setData(response.data)
        })
    }


   


  return (
    <div className="todo-container">
           <h1 className="headline">Todo List</h1>
      <div className="input-wrapper">
            <p className="todo-label">To do:</p>
            <input className='input-field' value={task} type="text" onChange={e => setTask(e.target.value)} />
            <p className="todo-name">Name:</p>
            <input className='input-field' value={name} type="text" onChange={e => setName(e.target.value)} />
           
            <button className="add-btn" onClick={addTask}>Add</button>

            <select className="select" onChange={(e) =>{ selectHandler(e.target.value)}}>
              <option value="all">All</option>
              <option value="uncompleted">Uncompleted</option>
              <option value="completed">Completed</option>
            </select>

          
         
        </div>
       
        <p>{data.map(obj => (
          <div className='card-wrapper'>

           
          <p className={obj.done === true ? 'task linethrough' : 'task'}>{obj.task}</p>
             
          <button className="edit-btn" onClick={()=>updateEditMode(obj.id)}>
              <FaRegEdit className="edit-icon"/>
          </button> 
          <p className='name'>{obj.name}</p>
          {obj.done === false ?<BsCheckLg className='check' onClick={()=>updateDone(obj.id)}/>
          : <BsCheckLg className="redCheck" onClick={()=>updateDoneAgain(obj.id)}/>}
        
          <button 
              className="btn"
              onClick={()=>deleteTask(obj.id)}>
                <div>
                <IoClose className='close'/>
                </div>
          </button>

          {obj.editMode == true ? <div className="newTask-div">
              <h2 className='newTask-headline'>Edit To do task:</h2>
              <input className='newTask-input' type="text" value={newTask} onChange={(e)=>setNewTask(e.target.value)} />
              <button className='done-button' onClick={()=>updateNewTask(obj.id, newTask)}>Done</button>
              </div>: '' }
              
          </div>
        ))}</p>
      
        
             
    </div>
  )
}

export default TodoList