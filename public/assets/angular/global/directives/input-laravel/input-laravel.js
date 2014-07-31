RestModule.directive('inputLaravel', function(){
        return {
            restrict: 'E',
            replace: true,
            transclude: true,
            templateUrl: 'assets/angular/global/directives/input-laravel/templates/input-laravel.html',
            scope: {
                name: '@',
                type: '@',
               label: '@',
               model: '=',
              errors: '='
            },
            link: function(scope, element, attrs, ctrl, transclude){
                console.debug(scope);
                element.find('div').replaceWith(transclude());
            }
        }
});
