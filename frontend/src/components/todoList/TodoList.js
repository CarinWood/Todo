import {useState} from 'react'
import './todoList.css'
import Placeholder from '../placeholder/Placeholder';
import InputArea from '../inputArea/InputArea';
import Card from '../card/Card';




const TodoList = () => {

    const [data, setData] = useState([])
    

  return (
    <div className="todo-container">
          <h1 className="headline" data-testid="headline">Todo List</h1>
    
          <InputArea setData={setData}/>
      
          <div className='card'>
                {data.length > 0 ? <p>{data.map(obj => (
                    <Card 
                    key={obj.id} 
                    id={obj.id} 
                    done={obj.done} 
                    task={obj.task} 
                    setData={setData} 
                    name={obj.name} 
                    editMode={obj.editMode}
                    />
                
                ))}</p> : <Placeholder/>}
          </div>    

    </div>
  )
}

export default TodoList