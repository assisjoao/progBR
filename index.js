const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();

let users = [
    {
        id: 0,
        name: 'João C',
        phone: '(23) 23232323'
    },
    {
        id: 1,
        name: 'José',
        phone: '(23) 23232323'
    },
    {
        id: 2,
        name: 'Marcio',
        phone: '(23) 23232323'
    },
]

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {

    res.render('user', {users});

    

    
});

app.get('/about', (req, res) => {

    res.render('about');

    
});

app. listen (3000, () => {
    console.log('Server Running on 3000')
});