//importing modules
// eslint-disable-next-line no-undef
var express = require('express');
var app = express();

//import routes
// eslint-disable-next-line no-undef
const routes = require('./routes/routes');

const port = 5000;
app.use('/secure', routes);


app.use((req, res) => {
    res.status(404).json('Invalid endpoint, no resource on that route');
});

app.use((error, req, res) => {
    res.status(error.status || 500);
});

app.listen(port, () => {
    console.log('Server is running on port ' + port);
});