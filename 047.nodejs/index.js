const express = require('express');

const app = express();

app.get('/', (request, response) => {
    const array = [1, 2, 4, 3, 1, 5, 4, 5];
    const newArr = [];
    for (let i = 0; i < array.length; i++) {
        if (!array.includes(newArr[i])) {
            newArr.push(array[i])
        }
    }

    response.send(newArr)
});

app.get('/about', (request, response) => {
    response.send('Hello, this is about route')
});

app.get('/contact', (request, response) => {
    response.send('Hi, this is contact route')
});

app.get('/:id', (request, response) => {
    const { id } = request.params

    const arr = [1, 2, 3, 4, 5, 6];
    const resArr = [];
    let itemArr = [];

    for (let i = 0; i < arr.length; i++) {
        itemArr.push(arr[i]);

        if (id == itemArr.length) {
            resArr.push(itemArr)
            itemArr = [];
        }
    }
    response.send(resArr)
});

const port = 3000;
app.listen(3000, () => {
    console.log('Server is running on port 3000 ');
});