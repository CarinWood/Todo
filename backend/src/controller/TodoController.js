const createTodo = (req, res) => {
        res.status(201).send('Successfully created user')
}

export default {
    createTodo,
}