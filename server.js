//importing modules
var express = require('express');
var app = express();

//import routes
const routes = require('./routes/routes');

const port = 5000 | process.env.PORT;
app.use('/secure', routes);


app.use((req, res, next) => {
    res.status(404).json('Invalid endpoint, no resource on that route');
});

app.use((error, req, res, next) => {
    res.status(error.status || 500);
});

app.listen(port, () => {
    console.log('Server is running on port ' + port);
});