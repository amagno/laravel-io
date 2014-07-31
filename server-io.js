var io = require('socket.io').listen(3001);
var redis = require('redis');


var redis_client = redis.createClient();

var client_count = 0;

var time_now = new Date();

io.sockets.on('connection', function(socket){

    client_count++;

    console.log('User ' + client_count + ' connected, ' + time_now);
    socket.emit('client_count', client_count);

    redis_client.keys('laravel:????????????????????????????????????????', function (err, replies) {
        console.log('Redis-Errors: ' + err);
        replies.forEach(function(replie, i){
            console.log('Client session: ' + i + ' id: ' + replie);
        });
    });

    var redis_sub = redis.createClient();
    redis_sub.subscribe('laravel_messages');

    redis_sub.on('message', function(channel, message){
        console.log('Laravel message as published: ' + message);
        socket.emit('laravel_message', message);
    });

    socket.on('disconnect', function(){
        console.log('Client ' + client_count + ' as disconnected');
        client_count--;
        socket.emit('client_count', client_count);
        redis_sub.unsubscribe();
        redis_sub.quit();
        redis_client.quit();

    });

});