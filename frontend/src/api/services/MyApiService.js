import http from '../MyApi'

const todoArray = () => {
    return http.get('/todo')
}

const getCompleted = () => {
    return http.get('/todo/completed')
}

const getUncompleted = () => {
    return http.get('/todo/uncompleted')
}

const deleteTask = (id) => {
    return http.delete(`/todo/${id}`)
}

const createTask = (task, name) => {
    return http.post(`/todo/add/${task}/${name}`)
}

const updateTaskDone = (id) => {
    return http.put(`/todo/${id}`)
}

const updateTaskDoneAgain = (id) => {
    return http.put(`/todo/again/${id}`)
}

const updateEditMode = (id) => {
    return http.put(`/todo/edit/${id}`)
}

const updateTask = (id, newText) => {
    return http.put(`/todo/update/${id}/${newText}`)
}



export default {
    todoArray,
    deleteTask,
    createTask,
    updateTaskDone,
    updateTaskDoneAgain,
    updateEditMode,   
    updateTask,
    getCompleted,
    getUncompleted,
}