const express = require('express');
const app = express();
const path = require('path');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (req, res) => {
    res.render('menu');
});

app.get('/login', (req, res) =>{
    res.render('login');
});

app.get('/register', (req, res) =>{
    res.render('register');
});

app.listen(3000, ()=>{
    console.log("serwer działa w http://localhost:3000")
});