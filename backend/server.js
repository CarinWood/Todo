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
        editMode: false,
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

  //UPDATE EDIT MODE:
  const updateEditMode = (id) => {
    let object =  `Could not find object with id: ${id}`
        todoArray.forEach(item => {
            if (id === item.id) {
                item.editMode = true
                object = item
                return
            }
        })
            return todoArray
  }
  app.put('/todo/edit/:id', (req, res) => {
      const id = Number(req.params.id)
      const responseFromDB = updateEditMode(id)
      res.status(201).send(responseFromDB)
  })

  //UPDATE TASK
  const updateNewTask = (id, newText) => {
    let object =  `Could not find object with id: ${id}`
      todoArray.forEach(item => {
          if (id === item.id) {
              item.task = newText
              item.editMode = false
              object = item
                return 
          }
      })
   
     
     return todoArray
  }

  app.put('/todo/update/:id/:newText', (req, res) => {
       const id = Number(req.params.id)
       const newText = req.params.newText
       const responseFromDB = updateNewTask(id, newText)
      res.status(201).send(responseFromDB)
  })


  //Get all completed taks
  const getCompletedTasks = () => {
    const completedTasks = []
        todoArray.forEach(item => {
            if(item.done === true)
            completedTasks.push(item)
        })
        return completedTasks
  }


  app.get('/todo/completed', (req, res) => {
        const responseFromDB = getCompletedTasks()
        res.status(200).send(responseFromDB)
       
  })

  //Get all uncompleted tasks:
  const getUncompletedTasks = () => {
    const uncompletedTasks = []
    todoArray.forEach(item => {
        if(item.done === false)
        uncompletedTasks.push(item)
    })
    return uncompletedTasks
  }

  app.get('/todo/uncompleted', (req, res) => {
      const responseFromDB = getUncompletedTasks()
      res.status(200).send(responseFromDB)
  })



app.listen(port, () => {
    console.log(`Server is running on port: ${port}`)
})