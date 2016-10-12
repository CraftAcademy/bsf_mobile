angular.module('slowfood.controllers', [])

.controller('RestaurantsController', function($scope, FakeRestaurants, uiGmapGoogleMapApi) {

    $scope.restaurants = FakeRestaurants.all();
    $scope.map = { center: { latitude: 57.6945602, longitude: 11.9745962 }, zoom: 13 };
});
