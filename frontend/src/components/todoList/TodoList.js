import {useState} from 'react'
import MyApiService from '../../api/services/MyApiService'
import './todoList.css'
import { IoClose } from "react-icons/io5";
import { BsCheckLg } from "react-icons/bs";
import { FaRegEdit } from "react-icons/fa";
import Placeholder from '../placeholder/Placeholder';
import NewTaskDiv from '../newTaskDiv/NewTaskDiv';
import InputArea from '../inputArea/InputArea';




const TodoList = () => {

    const [data, setData] = useState([])
    const [newTask, setNewTask] = useState('')
 

   
  

 

  
   
   

    function updateEditMode(id, todo) {
      setNewTask(todo)
      MyApiService.updateEditMode(id)
      .then(response => {
        console.log(response.data)
        setData(response.data)
      
      })
      .catch(error =>{console.log(error)})
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
           <h1 className="headline" data-testid="headline">Todo List</h1>
    
     <InputArea  setData={setData}/>
      
      <div className='card'>
        {data.length > 0 ? <p>{data.map(obj => (
          <div className='card-wrapper'>

           
          <p className={obj.done === true ? 'task linethrough' : 'task'}>{obj.task}</p>
             
          <button className="edit-btn" onClick={()=>updateEditMode(obj.id, obj.task)}>
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

          {obj.editMode === true ? <NewTaskDiv id={obj.id} data={data} setData={setData} />: '' }
              
          </div>
        ))}</p> : <Placeholder/>}

      </div>     

    </div>
  )
}

export default TodoList