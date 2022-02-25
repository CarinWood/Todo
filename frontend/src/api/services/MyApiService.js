import http from '../MyApi'

const todoArray = () => {
    return http.get('/todo')
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



export default {
    todoArray,
    deleteTask,
    createTask,
    updateTaskDone,
    updateTaskDoneAgain,
    updateEditMode,   
}