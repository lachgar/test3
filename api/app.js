var express = require('express');
var app = express();
var port = 3000;
var stringify = require('json-stringify-safe');
var csv = require('fast-csv')



app.post('/app', async (req, res)  => {
    console.log(stringify(req.query));
    res.send('Hello World!');
    var rows = [req.query];
    var fs = require('fs');
    var csvWriter = require('csv-write-stream');
    var csvFile = fs.createWriteStream("file.csv", { flags: 'a' });
    csvFile.write('\n');
    csv.writeToStream(csvFile, rows, { headers: false });





//    var o  = {hello: "world", foo: "bar", baz: "ta3co"};
//    fs.appendFile('file.csv', o, function (err) {
//        if (err)
//            console.error('Couldn\'t append the data');
//        console.log('The data was appended to file!');
//    });
});

app.listen(port, function () {
    console.log('Example app listening at http://localhost:${' + port + '}');
});