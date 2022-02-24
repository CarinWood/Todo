import {useState} from 'react'
import Card from './Card'
import MyApiService from '../api/services/MyApiService'
import './todoList.css'

const TodoList = () => {

    const [data, setData] = useState([])
    const [name, setName] = useState('')
    const [task, setTask] = useState('')

    function getData()  {
       MyApiService.todoArray()
        .then(response => {
           console.log(response.data)
           setData(response.data)
         
           
        })
        .catch(error => console.log(error))
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

  return (
    <div className="todo-container">
           <h1 className="headline">Todo List</h1>
      <div className="input-wrapper">
            <p>Task:</p>
            <input className='input-field' value={task} type="text" onChange={e => setTask(e.target.value)} />
            <p>Name:</p>
            <input className='input-field' value={name} type="text" onChange={e => setName(e.target.value)} />
           
            <button className="add-btn" onClick={addTask}>Add</button>
            <button onClick={getData}>API Call</button>
        </div>
       
        <p>{data.map(obj => (
          <>
          <Card task={obj.task} name={obj.name} id={obj.id} getData={getData}/>
          </>
        ))}</p>
      
        
    
    </div>
  )
}

export default TodoList