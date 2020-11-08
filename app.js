var express = require('express')
var app = express()
var port = 3000
var stringify = require('json-stringify-safe');


app.get('/', function (req, res) {
    console.log(stringify(req.query));
    res.send('Hello World!');
});

app.listen(port, function () {
    console.log('Example app listening at http://localhost:${' + port + '}');
});