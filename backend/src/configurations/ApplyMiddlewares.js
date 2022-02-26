import cors from 'cors'

const options = {
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE']
}

const applyMiddlewares = (app) => {
    app.use(cors(options))
}

export default {
    applyMiddlewares,
}

