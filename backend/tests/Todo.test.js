import Chai from 'chai'
import ChaiHTTP from 'chai-http'
import { describe, it } from 'mocha'
import app from '../src/server.js'

Chai.should()
Chai.use(ChaiHTTP)
const expect = Chai.expect

const randomString = Math.random().toString(36).substring(7)
console.log(randomString)

const testNonExistingRoute = () => {
    describe('testing a route that does not exist with expect', () => {
        it('should expect 404 not found', (done) => {
            Chai.request(app)
            .get(`/${randomString}`)
            .end((request, response) => {
                expect(response.status).to.equal(404)
                done()
            })
        })
    })
}

const createTodo = () => {
    describe('Testing to create a todo (POST)', () => {
        it('expects to get an array with an object in it', (done) => {
            Chai.request(app)
            .post('/todo/add/Clean/Carin')
            .end((error, response) => {
                const body = response.body
                const todo = body[0]
                expect(response.status).to.equal(201)
                expect(todo.task).to.equal('Clean')
                expect(todo.name).to.equal('Carin')
                expect(todo.done).to.equal(false)
                expect(body.length).to.equal(1)
                done()
            })
        })
    })
}

const createAnotherTodo = () => {
    describe('Testing to create another todo', () => {
        it('expects to get an array with two objects in it', (done) => {
            Chai.request(app)
            .post('/todo/add/Cook/Carl')
            .end((error, response) => {
                const body = response.body
                const todo = body[1]
                expect(response.status).to.equal(201)
                expect(body.length).to.equal(2)
                expect(todo.task).to.equal('Cook')
                expect(todo.name).to.equal('Carl')
                expect(todo).to.be.an('object')
                done()
            })
        })
    })
}


const getTodos = () => {
    describe('Testing to get an array of todos (GET)', () => {
        it ('should expect an array of todos to be returned', (done) => {
            Chai.request(app)
            .get('/todo')
            .end((error, response) => {
                const body = response.body
                expect(response.status).to.equal(200);
                expect(body.length).to.equal(2)
                expect(body).to.be.an('array')
                done()
            })
        })
    })
    
}


const updateDoneToTrue = () => {
    describe('Testing to update done to true', () => {
        it('should expect an array of todos', (done) => {
            Chai.request(app)
            .put('/todo/0')
            .end((error, response) => {
                const body = response.body
                const todo = body[0]
                const todo2 = body[1]
                expect(response.status).to.equal(200)
                expect(todo.done).to.equal(true)
                expect(todo2.done).to.equal(false)
                done()
            })
        })
    })
}

const updateSecondElementDoneToTrue = () => {
    describe('Testing to update the second element in array from done:false to done:true', () => {
        it('should expect an array of todos', (done) => {
            Chai.request(app)
            .put('/todo/1')
            .end((error, response) => {
                const body = response.body
                const todo = body[0]
                const todo2 = body[1]
                expect(response.status).to.equal(200)
                expect(todo.done).to.equal(true)
                expect(todo2.done).to.equal(true)
                done()
            })
        })
    })
}

const updateDoneToFalseAgain = () => {
    describe('Testing to update done from false to true again', () => {
        it('should expect an array of todos', (done) => {
            Chai.request(app)
            .put('/todo/again/0')
            .end((error, response) => {
                const body = response.body
                const todo = body[0]
                const todo2 = body[1]
                expect(response.status).to.equal(200)
                expect(todo.done).to.equal(false)
                expect(todo2.done).to.equal(true)
                done()
            })
        })
    })
}

const updateEditModeToTrue = () => {
    describe('Testing to update editMode to true', () => {
        it('should expect an array of todos', (done) => {
            Chai.request(app)
            .put('/todo/edit/0')
            .end((error, response) => {
                const body = response.body
                const todo = body[0]
                const todo2 = body[1]
                expect(response.status).to.equal(201)
                expect(todo.editMode).to.equal(true)
                expect(todo2.editMode).to.equal(false)
                done()
            })
        })
    })
}


const updateTask = () => {
    describe('update the task property', () => {
        it('should return an updated array', (done) => {
            Chai.request(app)
            .put('/todo/update/0/Shop')
            .end((error, response) => {
                const body = response.body
                const todo = body[0]

                expect(response.status).to.equal(201)
                expect(todo.task).to.equal('Shop')
                expect(todo.id).to.equal(0)
                done()
            })
        })
    })
}

const getAllCompletedTodos = () => {
    describe('get all completed todos in a separate array', () => {
        it('get an array with all completed todos', (done) => {
            Chai.request(app)
            .get('/todo/completed')
            .end((error, response) => {
                const body = response.body
                const todo = (body[0])
                expect(body.length).to.equal(1)
                expect(todo.done).to.equal(true)
                expect(response.status).to.equal(200)
                done()
            })
        })
    })
}

describe('TESTNIG TODO API ROUTES!', () => {
        testNonExistingRoute()
        createTodo()
        createAnotherTodo()
        getTodos()
        updateDoneToTrue()
        updateSecondElementDoneToTrue()
        updateDoneToFalseAgain()
        updateEditModeToTrue()
        updateTask()
        getAllCompletedTodos()
        
       
})