import {useState} from 'react'
import './card.css'
import MyApiService from '../api/services/MyApiService'


const Card = ({name, task, id, getData}) => {

  const [data, setData] = useState([])

  

  function deleteTask() {
    alert('hej')

    MyApiService.deleteTask(id)
    .then(response => {
      console.log(response.data)
      setData(response.data)
      getData()
     
    })
    .catch(error => console.log(error))
  
  }



  return (
    <div className='card-wrapper'>
        <h3 className='task' >{task}</h3>
        <p className="name">{name}</p>
        <button className="delete-btn" onClick={deleteTask}>DELETE</button>
        <button className="edit-btn">EDIT</button>
    </div>
  )
}

export default Card