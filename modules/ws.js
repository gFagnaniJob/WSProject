var WebSocketServer = require('ws').Server;
var wss = new WebSocketServer({port: 40510});

wss.on('connection', function(connection) {
    connection.on('message', function (message) {
        console.log("received: %s", message);
    });

    setInterval(
        () => connection.send(`${new Date()}`), 1000
    )
});