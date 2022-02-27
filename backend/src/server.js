import express from 'express'
import Configuration from './configurations/Configuration.js'
import ApplyMiddlewares from './configurations/ApplyMiddlewares.js'
import AliveController from './controller/AliveController.js'
import TodoController from './controller/TodoController.js'

const app = express()



ApplyMiddlewares.applyMiddlewares(app)


const todoArray = [
    {
        task: 'Clean',
        done: false,
        name: 'Carin',
        id: 142,
         editMode: false,
    }
]

export default todoArray


app.get('/', AliveController.alive)

//Get todo array
app.get('/todo', TodoController.getTodos)




const deleteTask = (id) => {
   
    for (let i = 0; i < todoArray.length; i++) {
        if (id === todoArray[i].id) {
            todoArray.splice(i, 1);
            return todoArray; 
        }
     
 
      
    }
    return 'error'
}


//DELETE
app.delete("/todo/:id", (req, res) => {
    const id = Number(req.params.id);
    const responsefromDB = deleteTask(id);
    res.send(responsefromDB);
  })

  

  //CREATE
  app.post('/todo/add/:task/:name', TodoController.createTodo)


  //UPDATE DONE

  app.put('/todo/:id', TodoController.updateDone)

  //UPDATE DONE AGAIN
 app.put('/todo/again/:id', TodoController.updateAgain)

  //UPDATE EDIT MODE:
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
  app.put('/todo/edit/:id', (req, res) => {
      const id = Number(req.params.id)
      const responseFromDB = updateEditMode(id)
      res.status(201).send(responseFromDB)
  })

  //UPDATE TASK
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

  app.put('/todo/update/:id/:newText', (req, res) => {
       const id = Number(req.params.id)
       const newText = req.params.newText
       const responseFromDB = updateNewTask(id, newText)
      res.status(201).send(responseFromDB)
  })

   //Update value
   const updateValue = (id, newValue) => {
        let object = `the id is: ${id} and the new value is ${newValue}`
        todoArray.forEach(item => {
            if (id === item.id) {
                item.value = newValue
                object = item
                return todoArray
            }
        })
        return todoArray
}

app.put('/todo/updatevalue/:id/:newValue', (req, res) => {
    const newValue = req.params.newValue;
    const id = Number(req.params.id)
    const responseFromDB = updateValue(id, newValue)
    res.status(201).send(responseFromDB)
})


  //Get all completed taks
  const getCompletedTasks = () => {
    const completedTasks = []
        todoArray.forEach(item => {
            if(item.done === true)
            completedTasks.push(item)
        })
        return completedTasks
  }


  app.get('/todo/completed', (req, res) => {
        const responseFromDB = getCompletedTasks()
        res.status(200).send(responseFromDB)
       
  })

  //Get all uncompleted tasks:
  const getUncompletedTasks = () => {
    const uncompletedTasks = []
    todoArray.forEach(item => {
        if(item.done === false)
        uncompletedTasks.push(item)
    })
    return uncompletedTasks
  }

  app.get('/todo/uncompleted', (req, res) => {
      const responseFromDB = getUncompletedTasks()
      res.status(200).send(responseFromDB)
  })



//start server
Configuration.connectToPort(app)