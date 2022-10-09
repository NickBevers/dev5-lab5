const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Defining the routers
const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');

// Routers settings for the app
app.use('/api/v1/messages', indexRouter);
app.use('/', (req, res) => { res.sendFile(__dirname + '/public/index.html') });
app.use('/users', usersRouter);

app.listen(port, () =>
    console.log(`Server running on ${port}, http://localhost:${port}`)
);