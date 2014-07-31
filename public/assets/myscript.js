var chatapp = angular.module('ChatApp', []);


chatapp.controller('ChatController', ['$scope', '$http', function($scope, $http){
    var socket = io.connect('http://192.168.0.161:3001');

    $scope.s_messages = [];

    $scope.client_count = null;

    socket.on('client_count', function(data){
        $scope.$apply(function(){
            $scope.client_count = data;
        });
    });


    socket.on('laravel_message', function(data){
        console.log('laravel message: ' + data);


        $scope.$apply(function(){
            $scope.s_messages.push(data);
        });

        console.log($scope.s_messages);
    });

}]);