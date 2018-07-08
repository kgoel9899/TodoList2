const express = require('express');
const path = require('path');
const PORT = process.env.PORT || 4000;
const todo= require('./controllers/TodoController');

app=express();

app.use(express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
todo(app);
app.listen(PORT, () => console.log(`Listening on ${ PORT }`));
