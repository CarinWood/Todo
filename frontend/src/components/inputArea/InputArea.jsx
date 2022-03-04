import {useState} from 'react'
import MyApiService from '../../api/services/MyApiService'

const InputArea = ({setData, }) => {
    const [name, setName] = useState('')
    const [task, setTask] = useState()

    function addTask() {
        MyApiService.createTask(task, name)
        .then(response => {
          setData(response.data)
        })
        .catch(error => console.log(error))
        setTask('')
        setName('')
      }

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

  return (
      <div className="input-wrapper">
              <p className="todo-label">To do:</p>

              <input 
                  data-testid="textinput" 
                  className='input-field' 
                  value={task} type="text" 
                  onChange={e => setTask(e.target.value)} 
              />

              <p className="todo-name">Name:</p>

              <input 
                  data-testid="nameinput" 
                  className='input-field' 
                  value={name} type="text" 
                  onChange={e => setName(e.target.value)} 
              />
            
              <button className="add-btn" onClick={addTask} data-testid="btn">Add</button>

              <select className="select" onChange={(e) =>{ selectHandler(e.target.value)}}>
                  <option value="all" data-testid="all">All</option>
                  <option value="uncompleted">Uncompleted</option>
                  <option value="completed">Completed</option>
              </select>
      </div>
  )
}

export default InputArea