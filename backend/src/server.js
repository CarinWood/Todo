import express from 'express'
import Configuration from './configurations/Configuration.js'
import Middlewares from './configurations/Middlewares.js'
import AliveRoutes from './routes/AliveRoutes.js'
import TodoRoutes from './routes/TodoRoutes.js'


const app = express()

Middlewares.apply(app)


AliveRoutes.routes(app)
TodoRoutes.routes(app)


Middlewares.wrongPath(app)
Middlewares.errorHandling(app)


//start server
Configuration.connectToPort(app)

export default app