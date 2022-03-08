import TodoController from "../controller/TodoController.js";

const routes = (app) => {

//CREATE
app.post('/todo/add/:task/:name', TodoController.createTodo)

//GET ARRAY
app.get('/todo', TodoController.getTodos)

//GET ALL COMPLETED TASKS
app.get('/todo/completed', TodoController.completedTasks)

//GET ALL UNCOMPLETED TASKS
app.get('/todo/uncompleted', TodoController.uncompletedTasks)

//UPDATE DONE
app.put('/todo/:id', TodoController.updateDone)

//UPDATE DONE AGAIN
app.put('/todo/again/:id', TodoController.updateAgain)

//UPDATE EDIT MODE:
app.put('/todo/edit/:id', TodoController.updateEdit)

//UPDATE TASK
app.put('/todo/update/:id/:newText', TodoController.updateTask)

//DELETE TASK
app.delete("/todo/:id", TodoController.deleteTodo)

}

export default {
    routes,
}