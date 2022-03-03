import cors from 'cors'
import helmet from 'helmet'
import morgan from 'morgan'
import express from 'express'

const options = {
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE']
}




const apply = (app) => {
    app.use(helmet())
    app.use(cors(options))
    app.use(express.json())
    app.use(morgan('common'))    
}

const notFound = (req, res, next) => {
    const error = new Error(`Not found "${req.originalUrl}"!`)
    res.status(404)
    next(error)
}

const wrongPath = (app) => {
    app.use(notFound)
}

const errorHandler = (error, req, res, next) => {
    const statusCode = res.statusCode === 200 ? 500 : res.statusCode
    res.status(statusCode)
    res.json({
    statusCode: statusCode,
    message: error.message,
    stackTrace: error.stack
})
    next()
} 

const errorHandling = (app) => {
    app.use(errorHandler)
}

export default {
    apply,
    wrongPath,
    errorHandling,
}

