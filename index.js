var express = require('express');
var WebSocketServer = require('ws').Server;
var wss = new WebSocketServer({port: 40510});



const bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())


var components = ["component00","component01","component02a","component02b","component02c",
"component02d","component03a","component03b","component04a","component04b","component05a", "component05b","complete"];

/*************** GETS ****************/

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/views/ws.html');
});

app.get('/complete.unity3d', function (req, res) {
    res.sendFile(__dirname + '/files/complete.unity3d');
});

app.get('/GETcomponent_random', function (req, res) {
    res.send(components[(Math.floor(Math.random()*13))]);
});

app.get('/prova', function(req, res) {
    res.sendFile(__dirname + '/views/prova.html');
})

/******************* POSTS ******************/

app.post('/send_component', function (req, res) {
    //req.body.inputText; //websocket
    array[0].send(req.body.inputText);
});

app.post('/POSTcomponent_random', function (req, res) {
    res.send(components[(Math.floor(Math.random()*13))]);
});
var array = [];


wss.on('connection', function(connection) {
    console.log("connesso");

    connection.on('message', function (message) {
        console.log("received: %s", message);
    });

    connection.send(`connesso`);
    array.push(connection);
    console.log(array);

});


app.listen(3000, function () {
    console.log("Example app listening on port 3000!");
});


