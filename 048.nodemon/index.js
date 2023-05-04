const express = require('express');
const { getAllData, getDataById, createData,updateData} = require('./service');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

app.get('/', (request, response) => {
    const data = getAllData()
    response.send(data)
});

app.get('/:id', (request, response) => {
    const { id } = request.params
    const data = getDataById(id)
    response.send(data)
});

app.post('/', (request, response) => {
    const { name, age } = request.body;
    const data = createData(name, age)
    response.send(data)
});

app.put('/:id', (request, response) => {
    const { id } = request.params;
    const {name, age} = request.body;
    const data = updateData(id, name, age)

    response.send(data)
})

app.listen(3000, () => {
    console.log('server is RUN');
});