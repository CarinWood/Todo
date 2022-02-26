import dotenv from 'dotenv'
dotenv.config()

const port = process.env.SERVER_PORT


const connectToPort = (app) => {
    app.listen(port, () => {
        console.log(`Server is running on port: ${port}`)
    })
}

export default {
    connectToPort,
}

