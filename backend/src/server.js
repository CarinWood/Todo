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
app.get('/todo/completed', TodoController.completedTasks)

//Get all uncompleted tasks:
app.get('/todo/uncompleted', TodoController.uncompletedTasks)



//start server
Configuration.connectToPort(app)