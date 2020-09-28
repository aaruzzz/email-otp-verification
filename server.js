// my node start point

require('dotenv').config();
var express = require('express');
var http = require('http');
var path = require('path');
var port = 3000;

var app = express();

// set public resources folder
app.use(express.static(__dirname));

// set your first route
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/index.html'));
});

var server = http.createServer(app);
server.listen(port, () => {
    console.log('Server is starting = ' + port);
});