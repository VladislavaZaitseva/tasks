const express = require('express');
const {
    getAllEnvironment,
    getEnvironmentById,
    createEnvironment,
    updataEnvironment,
    deleteEnvironment
} = require('./service')

const bodyParser = require('body-parser')
const app = express()
app.use(bodyParser.json())

app.get('/', (request, response) => {
    try {
        const data = getAllEnvironment();
        response.send(data)
    } catch (error) {
        response.send(error.message)
    }
});

app.get('/:id', (request, response) => {
    try {
        const { id } = request.params
        const data = getEnvironmentById(id)
        response.status(200).send(data)
    } catch (error) {
        response.status(404).send(error.message)
    }
});

app.post('/', (request, response) => {
    try{
        const { label, category, priority } = request.body;
        const data = createEnvironment(label, category, priority);
        response.status(200).send(data)
    }catch (error) {
        response.status(201).send(error.message)
    }
});

app.put('/:id', (request, response) => {
    try{
        const { id } = request.params
        const { label, category, priority } = request.body;
        const data = updataEnvironment(id, label, category, priority)
        response.status(200).send(data)
    }catch (error) {
        response.status(400).send(error.message)
    }
});

app.delete('/:id', (request, response) => {
    try{
        const { id } = request.params;
        const data = deleteEnvironment(id);
        response.status(200).send(data)
    }catch (error) {
        response.status(404).send(error.message)
    }
});

app.listen(3000, () => {
    console.log('server is running on port 3000');
});