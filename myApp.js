var express = require('express');
var app = express();

// menampilkan string pada console
console.log('Hello world');

// hanya mengakses satu handler saja, evaluate from top to bottom
// jika ada yg mengakses root path, maka akan tampil 'Hello express'
app.get('/', function(req, res) {
    res.send('Hello express');
});

// jika ada yg mengakses root path, maka akan tampil filenya
app.get('/', (req, res) => {
    var filePath = __dirname + '/views/index.html';
    res.send(filePath)
})

// file index mengakses /public
// menggunakan middleware function untuk mengakses file asset
var assetPath = __dirname + '/public';
app.use('/public', express.static(assetPath));


// jika ke /json, maka akan tampil data json
app.get('/json', (req, res) => {
    if (procces.env.MESSAGE_STYLE == "uppercase") {
        res.json({"message": "HELLO JSON"});
    } else {
        res.json({"message": "hello json"});
    }
    // var data = {"message": "Hello Json"};
    // res.json(data);
});


































 module.exports = app;
