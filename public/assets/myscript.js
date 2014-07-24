var chatapp = angular.module('ChatApp', []);


chatapp.controller('ChatController', ['$scope', '$http', function($scope, $http){
    var socket = io.connect('http://192.168.0.161:3000/');
}]);