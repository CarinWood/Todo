import todoArray from '../server.js'

const createTodo = (req, res) => {
        res.status(201).send(todoArray)
}

export default {
    createTodo,
}