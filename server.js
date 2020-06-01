//importing modules
var express = require('express');
var app = express();

require('dotenv').config();

//import routes
const routes = require('./routes/routes');

const port = 5000 | process.env.PORT;
app.use('/secure', routes);
app.use('/', routes);

app.use((req, res, next)=>{
    const error = new Error('Invalid endpoint, no resource on that route');
    error.status = 404;
    next(error);
});

app.use((error, req, res, next) => {
    res.status(error.status || 500);
});

app.listen(port, ()=>{
    console.log('Server is running on port ' + port);
});