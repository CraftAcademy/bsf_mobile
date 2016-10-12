angular.module('slowfood.controllers', [])

.controller('getRestaurantsCtrl', function($scope, restaurantsFactory, $ionicLoading, $ionicPopup) {
    $scope.$on('$ionicView.enter', function () {
        $scope.getData();
    });
    $scope.getData = function () {
        $ionicLoading.show({
            template: 'Retrieving data...'
        });
        restaurantsFactory.get({}, function (response) {
            $scope.restaurants = response.restaurants;
            $ionicLoading.hide();
        }, function (error) {
            $ionicLoading.hide();
            $scope.showAlert('Failure', error.statusText);
        })
    };
    $scope.showAlert = function (message, content) {
        var alertPopup = $ionicPopup.alert({
            title: message,
            template: content
        });
        alertPopup.then(function (res) {
            // Place some action here if needed...
        });
    };
    $scope.map = { center: { latitude: 57.6945602, longitude: 11.9745962 }, zoom: 13 };
})