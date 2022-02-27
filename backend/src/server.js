import express from 'express'
import Configuration from './configurations/Configuration.js'
import ApplyMiddlewares from './configurations/ApplyMiddlewares.js'
import AliveRoutes from './routes/AliveRoutes.js'
import TodoRoutes from './routes/TodoRoutes.js'

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

AliveRoutes.routes(app)
TodoRoutes.routes(app)





//start server
Configuration.connectToPort(app)