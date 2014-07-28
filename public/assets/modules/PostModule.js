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
    }
}]);

PostModule.directive('ngFormGroup', function(){
    return {
        restrict: 'E',
        replace: true,
        template: '<div class="form-group"></div>'


    };
});