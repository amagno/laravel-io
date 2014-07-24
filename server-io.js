var io = require('socket.io').listen(3001);
var redis = require('redis');


var redis_client = redis.createClient();



io.sockets.on('connection', function(socket){


    redis_client.keys('laravel:????????????????????????????????????????', function (err, replies) {
        console.log('Redis-Errors: ' + err);
        replies.forEach(function(replie, i){
            console.log('Client is connected! ' + i + ' id: ' + replie);
        });
    });

});