import http from '../MyApi'

const todoArray = () => {
    return http.get('/todo')
}

const deleteTask = (task) => {
    return http.delete(`/todo/${task}`)
}

const createTask = (task, name) => {
    return http.post(`/todo/add/${task}/${name}`)
}

export default {
    todoArray,
    deleteTask,
    createTask,
   
}