var express = require('express');
var WebSocketServer = require('ws').Server;
var wss = new WebSocketServer({port: 40510});



const bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())


var components = ["component00","component01","component02a","component02b","component02c",
"component02d","component03a","component03b","component04a","component04b","component05a", "component05b"];

/*************** GETS ****************/

app.get('/', function (req, res) {
    console.log(".... get / ....")
    res.sendFile(__dirname + '/views/ws.html');
});

app.get('/complete.unity3d', function (req, res) {
    console.log("sending file.... complete.unity3d....");
    res.sendFile(__dirname + '/files/complete.unity3d');
});

app.get('/GETcomponent_random', function (req, res) {
    var component = components[(Math.floor(Math.random()*12))];
    console.log(".... get /GETcomponent_random ...." + component + "....");
    res.send(component);
});

app.get('/prova', function(req, res) {
    console.log(".... get /prova ....")
    res.sendFile(__dirname + '/views/prova.html');
})

/******************* POSTS ******************/

app.post('/send_component', function (req, res) {
    //req.body.inputText; //websocket
    console.log(".... post /send_component " + req.body.components + "....")
    array.forEach(function(connection){
        connection.send(req.body.components);
    });
});

app.post('/POSTcomponent_random', function (req, res) {
    var component = components[(Math.floor(Math.random()*12))];
    console.log(".... post /POSTcomponent_random ...." + component + "....");
    console.log("req.body = " + req.body.voto);
    res.send(component);
});
var array = [];


wss.on('connection', function(connection) {
    console.log("connesso");

    connection.on('message', function (message) {
        console.log("received: %s", message);
    });

    //connection.send(`connesso`);
    array.push(connection);
});


app.listen(3000, function () {
    console.log("Example app listening on port 3000!");
});


