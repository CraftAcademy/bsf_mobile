angular.module('slowfood.services', ['ngResource'])

    .factory('restaurantsFactory', function ($resource, API_URL) {
        console.log('can do here?');
        return $resource(API_URL + '/restaurants/:id', {},
            {
                'query': {
                    method: 'GET',
                    isArray: false
                }
            })
    })
    .factory('cartsFactory', function ($resource, API_URL, $rootScope) {
        var cart_id = $rootScope.cart_id;
        console.log('from cartsFactory: ' + cart_id);
        return $resource(API_URL + '/carts/:id', {}, {
            'post': {
                method: 'POST'
            },
            'fuckfuckfuck': {
                method: 'PUT'
            }
        });

    });
