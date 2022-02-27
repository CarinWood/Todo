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

//DELETE TASK
app.delete("/todo/:id", TodoController.deleteTodo)

//CREATE
app.post('/todo/add/:task/:name', TodoController.createTodo)

//UPDATE DONE
app.put('/todo/:id', TodoController.updateDone)

//UPDATE DONE AGAIN
app.put('/todo/again/:id', TodoController.updateAgain)

//UPDATE EDIT MODE:
app.put('/todo/edit/:id', TodoController.updateEdit)

//UPDATE TASK
app.put('/todo/update/:id/:newText', TodoController.updateTask)

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