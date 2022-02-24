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

export default {
    todoArray,
    deleteTask,
    createTask,
   
}