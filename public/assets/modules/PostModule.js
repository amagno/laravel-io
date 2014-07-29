/**
 * Created by Atendimento02 on 28/07/2014.
 */


var PostModule = angular.module('PostModule', []);



PostModule.controller('TestController', ['$scope', '$http', function($scope, $http){
    $scope.user = {};

    $scope.submit = function(){
        $http.post('/test/create', $scope.user)
            .success(function(data){
                $scope.user.errors = null;
                console.log('Is Success: ' + data);
            })
            .error(function(data){
                $scope.user.errors = data;
                console.log('Is Errors: ' + data);
            });
    };

    $('form input').on('keyup', function(){
        $scope.user.errors = null;
    });
    $scope.testefu = function(){
        $scope.user = {
            errors: {
                email: true
            }
        };
        console.log($scope.user);
    };
}]);

PostModule.directive('ngSendForm', function(){
    return {
        restrict: 'E',
        replace: true,
        template: '<div class="form-group">' +
                  '<label for="{{ name }}">{{ description }}</label>' +
                  '<input type="{{ type }}" id="{{ name }}" name="{{ name }}" placeholder="{{ description }}"/>' +
                  '</div>',
        link: function(scope, element, attrs){
            console.log(attrs.ngSendForm);
            element.attr("ng-class", "{ 'has-error' : " + attrs.master  +  " }");
            scope.root_data = attrs.master;
        }


    }
});

PostModule.directive('testDirective', function(){
    return {
        restrict: 'E',
        replace: true,
        template: '<div class="form-group">' +
        '<button ng-click="click()">{{ name }}</button> {{ model }}</div>',
        scope: {
            model: '=',
            name: '@',
            click: '&'
        },
        link: function(scope, element, attrs){
            scope.$watch('model', function(model){
                if(model){
                    element.addClass('has-error');
                }
            });
        }

    }
});