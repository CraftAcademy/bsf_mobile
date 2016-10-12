angular.module('slowfood.controllers', [])

.controller('RestaurantsController', function($scope, FakeRestaurants, uiGmapGoogleMapApi) {

    $scope.restaurants = FakeRestaurants.all();
    $scope.map = { center: { latitude: 45, longitude: -73 }, zoom: 8 };

    uiGmapGoogleMapApi.then(function(maps) {

    });

});
