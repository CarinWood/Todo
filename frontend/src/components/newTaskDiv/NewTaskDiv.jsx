import {useState} from 'react'
import { IoClose } from "react-icons/io5";
import MyApiService from '../../api/services/MyApiService';

const NewTaskDiv = ({id, setData, tasktext}) => {
    const [newTask, setNewTask] = useState(tasktext)
    
    function clearField() {
        setNewTask('')
      }

    function updateNewTask(id, newTask) {
        MyApiService.updateTask(id, newTask)
        .then(response => {
          setData(response.data)
          setNewTask('')
        })
     }


  return (
    <div className="newTask-div">
            <h2 className='newTask-headline'>Edit To do task:</h2>
                <input 
                    className='newTask-input' 
                    type="text" 
                    value={newTask} 
                    onChange={(e)=>setNewTask(e.target.value)} 
                />
                        
                        
            {newTask.length > 0 && 
                <button 
                    className='clear-btn' 
                    onClick={clearField}>
                    <IoClose className='clear'/>
                </button>}
              
                <button 
                    className='done-button' 
                    onClick={()=>updateNewTask(id, newTask)}>
                    Done
                </button>
    </div>
  )
}

export default NewTaskDiv