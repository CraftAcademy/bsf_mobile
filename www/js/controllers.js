angular.module('slowfood.controllers', [])

.controller('getRestaurantsCtrl', function($scope, restaurantsFactory, $ionicLoading) {
    $scope.$on('$ionicView.enter', function () {
        $scope.getData();
    });
    $scope.getData = function(){
        $ionicLoading.show({
            template: 'Retrieving data...'
        });
        restaurantsFactory.query({}, function(response){
            console.log(response);
            $state.go('app.restaurants', {restaurants: response});
            $ionicLoading.hide();
        }, function(error){
            $ionicLoading.hide();
            $scope.showAlert('Failure', error.statusText);
        })
    };
    $scope.showAlert = function(message, content) {
        var alertPopup = $ionicPopup.alert({
            title: message,
            template: content
        });
        alertPopup.then(function(res) {
            // Place some action here if needed...
        });
    };

});
