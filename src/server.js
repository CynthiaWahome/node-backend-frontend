const express = require ('express');
const path = require('path');

const app = express();

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/api/users', (req, res) => {
const users = [{
        id: '123',
        name: 'John',
    }, {
        id: '456',
        name: 'Shaun',
    }, {
        id: '789',
        name: 'Sue',
    }];

    res.json(users);
});

app.listen(8080, () => {
    console.log('Server is listening on port 8080')
});