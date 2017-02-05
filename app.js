angular.module('n', ['ui.bootstrap','ui.router','ngAnimate']);

angular.module('n').config(function($stateProvider, $urlRouterProvider) {

    $stateProvider
    .state("about",{
        url: "/about",
        templateUrl: "partial/about/about.html"
    })
    .state("contact",{
        url: "/contact",
        templateUrl: "partial/contact/contact.html"
    })
    .state("home",{
        url: "/home",
        templateUrl: "partial/home/home.html"
    });

    $urlRouterProvider.otherwise('/home');
});

angular.module('n').run(function($rootScope) {

    $rootScope.safeApply = function(fn) {
        var phase = $rootScope.$$phase;
        if (phase === '$apply' || phase === '$digest') {
            if (fn && (typeof(fn) === 'function')) {
                fn();
            }
        } else {
            this.$apply(fn);
        }
    };

});
