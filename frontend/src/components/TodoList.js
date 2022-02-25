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
         
        </div>
       
        <p>{data.map(obj => (
          <div className='card-wrapper'>

            {obj.editMode === false ?
          <p className={obj.done === true ? 'task linethrough' : 'task'}>{obj.task}</p>
              : <input value={newTask} onChange={(e)=>setNewTask(e.target.value)} className="changeTextInput" type="text"/>} 
           {obj.editMode === false ? <button className="edit-btn" onClick={()=>updateEditMode(obj.id)}>
              <FaRegEdit className="edit-icon"/>
          </button> : <button className="done-btn" onClick={()=>updateNewTask(obj.id, newTask)}>Done</button>}
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
        
          </div>
        ))}</p>
      
        
    
    </div>
  )
}

export default TodoList