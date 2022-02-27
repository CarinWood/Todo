import todoArray from '../server.js'

let counter = 0
const getId = () => {
        return counter ++
}

const createTodo = (req, res) => {
    const task = req.params.task
    const name = req.params.name
    
    
    let newTask = {
          task: task,
          name: name,
          done: false,
          editMode: false,
          id: getId(),
    }

    todoArray.push(newTask)
    res.status(201).send(todoArray)
}

const getTodos = (req, res) => {
    res.status(200).send(todoArray)
}




const findTaskById = (id) => {
    let object =  `Could not find object with id: ${id} `
      todoArray.forEach(item => {
          if (id === item.id) {
              item.done = !false
              object = item
          
              return 
                
          } 
          
      })

      return todoArray
  }


const updateDone = (req, res) => {
    const id = Number(req.params.id)
    const responseFromDB = findTaskById(id)
    res.send(responseFromDB)
}


const updateDoneAgain = (id) => {
    let object =  `Could not find object with id: ${id}`
    todoArray.forEach(item => {
        if(id === item.id) {
            item.done = false
            object = item
            return
        }
    });
        return todoArray
  }


const updateAgain = (req, res) => {
    const id = Number(req.params.id)
    const responseFromDB = updateDoneAgain(id)
    res.send(responseFromDB)
}

const updateEditMode = (id) => {
    let object =  `Could not find object with id: ${id}`
        todoArray.forEach(item => {
            if (id === item.id) {
                item.editMode = true
                object = item
                return
            }
        })
            return todoArray
  }

const updateEdit = (req, res) => {
    const id = Number(req.params.id)
    const responseFromDB = updateEditMode(id)
    res.status(201).send(responseFromDB)
}

const deleteTask = (id) => {
   
    for (let i = 0; i < todoArray.length; i++) {
        if (id === todoArray[i].id) {
            todoArray.splice(i, 1);
            return todoArray; 
        }
     
 
      
    }
    return 'error'
}


const deleteTodo = (req, res) => {
    const id = Number(req.params.id);
    const responsefromDB = deleteTask(id);
    res.send(responsefromDB);
} 

const updateNewTask = (id, newText) => {
    let object =  `Could not find object with id: ${id}`
      todoArray.forEach(item => {
          if (id === item.id) {
              item.task = newText
              item.editMode = false
              object = item
                return 
          }
      })
   
     
     return todoArray
  }


const updateTask = (req, res) => {
    const id = Number(req.params.id)
    const newText = req.params.newText
    const responseFromDB = updateNewTask(id, newText)
   res.status(201).send(responseFromDB)
}
 
export default {
    createTodo,
    getTodos,
    updateDone,
    updateAgain,
    updateEdit,
    deleteTodo,
    updateTask
}