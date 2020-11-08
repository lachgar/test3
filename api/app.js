var express = require('express');
var app = express();
var port = 3000;
var stringify = require('json-stringify-safe');
var csv = require('fast-csv')

app.get('/app', function (req, res) {
    console.log(stringify(req.query));
    res.send('Hello World!');
    var rows = [req.query];
    var fs = require('fs');
    var csvWriter = require('csv-write-stream');
    var csvFile = fs.createWriteStream("file.csv", {flags: 'a'});
    csvFile.write('\n');
    csv.writeToStream(csvFile, rows, {headers: false});
});

app.listen(port, function () {
    console.log('Example app listening at http://localhost:${' + port + '}');
});