var express = require('express');
var ws = require('./modules/ws');

var app = express();

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/views/ws.html');
});

app.listen(3000, function () {
    console.log("Example app listening on port 3000!");
})