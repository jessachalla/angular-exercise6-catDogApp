"use strict";

angular.module("catDogApp")
.config(["$routeProvider", ($routeProvider) => {
    $routeProvider
    .when("/home", {
        template: "<home></home>"
    })
    .when("/dog", {
        template: "<dog></dog>"
    })
    .when("/cat", {
        template: "<cat></cat>"
    })
    .otherwise({
        redirectTo: "/home"
    })
}]);