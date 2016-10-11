angular.module('slowfood.controllers', [])

.controller('RestaurantsController', function($scope, Restaurants) {

$scope.restaurants = Restaurants.all();
});
