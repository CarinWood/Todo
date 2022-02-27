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

export default {
    createTodo,
    getTodos,
    updateDone,
    updateAgain
}