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
     
 
      
    }
    return 'error'
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

  //CREATE
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


  //UPDATE
  
  const findTaskById = (id) => {
    let object =  `Could not find object with id: ${id} `
      todoArray.forEach(item => {
          if (id === item.id) {
              item.done = !false
              object = item
          
              return 
                
          } 
          
      })

      return todoArray
  }


  app.put('/todo/:id', (req, res) => {
      const id = Number(req.params.id)
      const responseFromDB = findTaskById(id)
      res.send(responseFromDB)
  })

  //UPDATE AGAIN
  const updateDoneAgain = (id) => {
    let object =  `Could not find object with id: ${id}`
    todoArray.forEach(item => {
        if(id === item.id) {
            item.done = false
            object = item
            return
        }
    });
        return todoArray
  }


  app.put('/todo/again/:id', (req,res) => {
      const id = Number(req.params.id)
      const responseFromDB = updateDoneAgain(id)
      res.send(responseFromDB)
  })



app.listen(port, () => {
    console.log(`Server is running on port: ${port}`)
})