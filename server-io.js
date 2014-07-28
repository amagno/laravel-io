var io = require('socket.io').listen(3001);
var redis = require('redis');


//var redis_client = redis.createClient();

var client_count = 0;

var time_now = new Date();

io.sockets.on('connection', function(socket){

   console.log('Client ' + client_count + ' connected, ' + time_now);
    /*
    *
    redis_client.keys('laravel:????????????????????????????????????????', function (err, replies) {
        console.log('Redis-Errors: ' + err);
        replies.forEach(function(replie, i){
            console.log('Client is connected! ' + i + ' id: ' + replie);
        });
    });
    *
    */
});