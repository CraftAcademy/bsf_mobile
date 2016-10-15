angular.module('slowfood.controllers', [])

    .controller('getRestaurantsCtrl', function ($scope, $rootScope, restaurantsFactory, cartsFactory,
                                                $ionicLoading, $ionicPopup, $cordovaGeolocation,
                                                $ionicPlatform,
                                                $ionicModal) {

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

        var restaurant_response;

        $scope.pickRestaurant = function (rest_id) {
            $ionicModal.fromTemplateUrl('templates/show-restaurant.html', {
                scope: $scope,
                animation: 'slide-in-up'
            }).then(function (modal) {
                $scope.modal = modal;
                $scope.openModal();
            });

            $scope.openModal = function () {
                $scope.getRestaurantData(rest_id);
                $scope.modal.show();
            };

            $scope.closeModal = function () {
                $scope.modal.hide();
            };

            //Cleanup modal after we're done using it
            $scope.$on('$destroy', function () {
                $scope.modal.remove();
            });
            $scope.$on('modal.removed', function () {
                // some action to perform after we hide the modal
            });

            $scope.getRestaurantData = function (rest_id) {
                $ionicLoading.show({
                    template: 'Retrieving data...'
                });
                restaurantsFactory.query({id: rest_id}, function (response) {
                    $scope.restaurant = response;
                    restaurant_response = response;
                    $ionicLoading.hide();
                }, function (error) {
                    $ionicLoading.hide();
                    $scope.showAlert('Failure', error.statusText);
                })
            };
        };

        $scope.pickMenu = function (index) {
            $ionicModal.fromTemplateUrl('templates/show-menu.html', {
                scope: $scope,
                animation: 'slide-in-up'
            }).then(function (modal) {
                $scope.modal = modal;
                $scope.currentMenuIndex = index;
                $scope.getCategoryArrays(index);
                $scope.openModal();
            });
        };

        $scope.getCategoryArrays = function (index) {
            var startersArray = [];
            var mainsArray = [];
            var dessertsArray = [];
            var menu = restaurant_response.menus[index];
            for (i = 0; i < menu.dishes.length; i++) {
                switch (menu.dishes[i].category) {
                    case 'Starters':
                        startersArray.push(menu.dishes[i]);
                        break;
                    case 'Mains':
                        mainsArray.push(menu.dishes[i]);
                        break;
                    case 'Desserts':
                        dessertsArray.push(menu.dishes[i]);
                        break;
                    default:
                        return true;
                }
            }
            $scope.startersArray = startersArray;
            $scope.mainsArray = mainsArray;
            $scope.dessertsArray = dessertsArray;
        };

        $ionicPlatform.ready(function () {
            $scope.map = {center: {latitude: 57.6945602, longitude: 11.9745962}, zoom: 13};

            var posOptions = {
                enableHighAccuracy: false,
                timeout: 20000,
                maximumAge: 0
            };
            $cordovaGeolocation.getCurrentPosition(posOptions).then(function (position) {
                var lat = position.coords.latitude;
                var long = position.coords.longitude;
                $scope.map = {center: {latitude: lat, longitude: long}, zoom: 13};
            }, function (err) {
                $ionicLoading.hide();
            });

        });

        $scope.addToCart = function (dish_id) {
            $ionicLoading.show({
                template: 'Adding to cart'
            });
            cartsFactory.post({dish_id: dish_id}).$promise.then(function (response) {
                $scope.cart = response;
                $rootScope.cart_id = response.cart_id;
                $ionicLoading.hide();
            }, function (error) {
                $ionicLoading.hide();
                $scope.showAlert('Failure', error.statusText);
            })
        };

        $scope.addToExistingCart = function (dish_id) {
            $ionicLoading.show({
                template: 'Adding to cart'
            });
            cartsFactory.put({id: $scope.cart.cart_id, dish_id: dish_id}, function (response) {
                $ionicLoading.hide();
            }, function (error) {
                $ionicLoading.hide();
                $scope.showAlert('Failure', error.statusText);
            })
        }

    })

    .controller('loginCtrl', function ($rootScope, $scope, $ionicLoading, $auth, $location) {
        $scope.loginData = {};

        $scope.doLogin = function () {
            $ionicLoading.show({
                template: 'Logging in...'
            });
            $auth.submitLogin($scope.loginData)
                .then(function (response) {
                    $ionicLoading.hide();
                    $location.path('tab-restaurants');
                })
                .catch(function (error) {
                    $ionicLoading.hide();
                    $scope.errorMessage = error;
                })

        };

        $rootScope.$on('auth:login-success', function (ev, user) {
            $scope.currentUser = angular.extend(user, $auth.retrieveData('auth_headers'));
        });

    });

