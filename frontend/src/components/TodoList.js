import {useState} from 'react'
import MyApiService from '../api/services/MyApiService'
import './todoList.css'
import { IoClose } from "react-icons/io5";
import { BsCheckLg } from "react-icons/bs";


const TodoList = () => {

    const [data, setData] = useState([])
    const [name, setName] = useState('')
    const [task, setTask] = useState('')


    function addTask() {
      MyApiService.createTask(task, name)
      .then(response => {
        setData(response.data)
      })
      .catch(error => console.log(error))
      setTask('')
      setName('')
    }

    function deleteTask(theId) {
      console.log(theId)
       MyApiService.deleteTask(theId)
      .then(response => {
        setData(response.data)
      
         console.log(response.data)
         
       
      })
      .catch(error => console.log(error))
    
    }


    function updateDone(theId) {
        console.log(theId)
        MyApiService.updateTaskDone(theId)
        .then(response => {
          console.log(response.data)
          setData(response.data)

          
        })
    }

    function updateDoneAgain(theId) {
        console.log(theId)
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
          <p className={obj.done === true ? 'task linethrough' : 'task'}>{obj.task}</p>
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