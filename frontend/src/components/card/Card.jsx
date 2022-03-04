import {useState} from 'react'
import { IoClose } from "react-icons/io5";
import { BsCheckLg } from "react-icons/bs";
import { FaRegEdit } from "react-icons/fa";
import NewTaskDiv from '../newTaskDiv/NewTaskDiv';
import MyApiService from '../../api/services/MyApiService';

const Card = ({id, done, task, setData, name, editMode}) => {
    const [newTask, setNewTask] = useState('')

    function updateEditMode(id, todo) {
        setNewTask(todo)
        MyApiService.updateEditMode(id)
        .then(response => {
          setData(response.data)
        })
        .catch(error =>{console.log(error)})
      }

      function updateDone(id) {
        MyApiService.updateTaskDone(id)
        .then(response => {
          setData(response.data)
        })
        .catch(error => console.log(error))
    }

    function updateDoneAgain(id) {
        MyApiService.updateTaskDoneAgain(id)
        .then(response => {
          setData(response.data)
        })
        .catch(error => console.log(error))
    }

    function deleteTask(id) {
        MyApiService.deleteTask(id)
       .then(response => {
         setData(response.data) 
       })
       .catch(error => console.log(error))
     }



  return (
    <div className='card-wrapper'>

    <p className={done === true ? 'task linethrough' : 'task'}>{task}</p>
      
    <button className="edit-btn" onClick={()=>updateEditMode(id, task)}>
        <FaRegEdit className="edit-icon"/>
    </button> 

    <p className='name'>{name}</p>

    {done === false ? <BsCheckLg className='check' onClick={()=>updateDone(id)}/>
    : <BsCheckLg className="redCheck" onClick={()=>updateDoneAgain(id)}/>}
  
    <button 
        className="btn"
        onClick={()=>deleteTask(id)}>
          <div>
          <IoClose className='close'/>
          </div>
    </button>

    {editMode === true ? <NewTaskDiv id={id} setData={setData} tasktext={task} />: '' }
        
    </div>
  )
}

export default Card