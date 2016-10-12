angular.module('slowfood.controllers', [])

.controller('RestaurantsController', function($scope, FakeRestaurants) {

$scope.restaurants = Restaurants.all();
});
