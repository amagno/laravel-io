var RestModule = angular.module('RestModule', []);


RestModule.controller('TestController', function($scope){

});

angular.module('ng').directive('testDirective', function(){
    return {
       restrict: 'E',
        replace: true,
     transclude: true,
       templateUrl: 'assets/angular/global/directives/input-laravel/templates/input-laravel.html',
          scope: {
              model: '=',
             errors: '=',
               name: '@',
               type: '@',
              label: '@'
          },

        link: {
            pre: function preLink(scope, element, attrs, ctrl, transclude){
                if(transclude){
                    element.find('ng-transclude').replaceWith(transclude());
                }else{
                    element.find('ng-transclude').remove();
                }
            },
            post: function postLink(scope, element, attrs, ctrl, transclude){
                scope.$watch('errors', function(errors){
                    if(errors){
                        element.addClass('has-error');
                    }else{
                        element.removeClass('has-error');
                    }
                });
                scope.$watch('model', function(model){
                    if(model){
                        if(model.length > 2){
                            scope.errors = null;
                        }
                    }
                })

            }
        }
    }
});