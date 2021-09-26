var express = require('express');
var app = express();

app.get('/', (req, res)=> {
    // __dirname = /home/runner/boilerplate-express
    var path = __dirname + 'views/index.html';
    res.sendfile(path);
})









module.exports = app;