const express = require('express');
const app = express();

// Defining the routers
const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');

// Setng up setings for the app
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routers settings for the app
app.use('/api/v1/messages', indexRouter);
app.use('/', (req, res) => { res.sendFile(__dirname + '/public/index.html') });
app.use('/users', usersRouter);

