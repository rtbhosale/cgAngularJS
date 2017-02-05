angular.module('n').filter('capitalize', function() {
    return function(input,arg) {
        return (!!input) ? input.charAt(0).toUpperCase() + input.substr(1).toLowerCase() : '';
    };
});