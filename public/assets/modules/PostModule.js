/**
 * Created by Atendimento02 on 28/07/2014.
 */


var PostModule = angular.module('PostModule', []);



PostModule.controller('TestController', ['$scope', '$http', function($scope, $http){

    $scope.submit = function(){
        $http.post('/test/create', $scope.user)
            .success(function(data){
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
                email: ['asdasdasdasdasdasd']
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
        '<label class="control-label" for="{{ name | lowercase }}">{{ label | ucfirst }}</label>' +
        '<input  class="form-control" type="{{ type }}" id="{{ name | lowercase }}" name="{{ name | lowercase }}" ng-model="model"/>' +
        '<p class="help-block" ng-show="errors" ng-repeat="error in errors">{{ error }}</p>' +
        '</div>',
        scope: {
            model: '=',
            errors: '=',
            type: '@',
            name: '@',
            label: '@',
            validation: '@'
        },
        link: function(scope, element, attrs){
            var validation = attrs.validation;
            var input = element.find('input');
            var form_name = element.parent('form').attr('name');



            if(validation){
                var validation_regex = {
                    required: validation.match(/required/g) ? validation.match(/required/g)[0] : false,
                    min: validation.match(/min:([0-9]+)/g) ? validation.match(/min:([0-9]+)/g)[0].split(':')[1] : false,
                    max: validation.match(/max:([0-9]+)/g) ? validation.match(/mix:([0-9]+)/g)[0].split(':')[1] : false
                };
                if(validation_regex.required){
                    input.attr('required', true);
                }
                if(validation_regex.min){
                    input.attr('ng-minlength', validation_regex.min);
                }
                if(validation_regex.max){
                    input.attr('ng-maxlength', validation_regex.max);
                }
            }


            scope.$watch('errors', function(errors){
                if(errors){
                    element.addClass('has-error');
                    input.on('keyup', function(){
                        if(input.val().length > 2){
                            scope.errors = false;
                            element.removeClass('has-error');
                        }
                    });
                }
            });
        }

    }
});

PostModule.filter('ucfirst', function(){
   return function(input, scope){
       if(input != null){
            input = input.toLowerCase();
            return input.substring(0, 1).toUpperCase() + input.substring(1);
       }
   }
});