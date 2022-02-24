import {useState} from 'react'
import MyApiService from '../api/services/MyApiService'
import './todoList.css'
import { MdClear } from "react-icons/md";

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

  return (
    <div className="todo-container">
           <h1 className="headline">Todo List</h1>
      <div className="input-wrapper">
            <p>Task:</p>
            <input className='input-field' value={task} type="text" onChange={e => setTask(e.target.value)} />
            <p>Name:</p>
            <input className='input-field' value={name} type="text" onChange={e => setName(e.target.value)} />
           
            <button className="add-btn" onClick={addTask}>Add</button>
         
        </div>
       
        <p>{data.map(obj => (
          <div className='card-wrapper'>
          <p className='task'>{obj.task}</p>
          <p className='name'>{obj.name}</p>
          <button 
           
              onClick={()=>deleteTask(obj.id)}>
                <MdClear className="close"/>
          </button>
        
          </div>
        ))}</p>
      
        
    
    </div>
  )
}

export default TodoList