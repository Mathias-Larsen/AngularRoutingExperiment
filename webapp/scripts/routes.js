
topdocRouting.config(['$routeProvider', '$stateProvider', '$urlRouterProvider', '$httpProvider', '$locationProvider'],
    function ($routeProvider, $stateProvider, $urlRouterProvider, $httpProvider) {

        $urlRouterProvider.otherwise('/loginUser');

        $stateProvider
            .state('state1', {
                url: "/state1",
                templateUrl: "partials/state1.html"
            })
            .state('state2', {
                url: "/state2",
                templateUrl: "partials/state2.html"
            });
});