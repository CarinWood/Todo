import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'

const app = express()
dotenv.config()
const port = process.env.SERVER_PORT

const options = {
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE']
}

app.use(cors(options))


const todoArray = [
    {
        task: 'clean',
        name: 'Carin',
        done: false,
        id: 0,
    }
]

app.get('/', (req,res) =>{
    res.send('API is alive!')
})

app.get('/todo',(req, res) => {
    res.send(todoArray)
})

const deleteTask = (id) => {
    for (let i = 0; i < todoArray.length; i++) {
        if (id === todoArray[i].id) {
            todoArray.splice(i, 1);
            return todoArray;
         
        }
     
      return 'error'
      
    }
}


//DELETE
app.delete("/todo/:id", (req, res) => {
    const id = Number(req.params.id);
    const responsefromDB = deleteTask(id);
    res.send(responsefromDB);
  })

    let counter = 0
    const getId = () => {
            return counter ++
    }

  //Create
  app.post('/todo/add/:task/:name', (req, res) => {
      const task = req.params.task
      const name = req.params.name
      
      
      let newTask = {
        task: task,
        done: false,
        name: name,
        id: getId()
      }

      todoArray.push(newTask)
      res.status(201).send(todoArray)

  })



app.listen(port, () => {
    console.log(`Server is running on port: ${port}`)
})