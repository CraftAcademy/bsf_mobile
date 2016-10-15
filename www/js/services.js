angular.module('slowfood.services', ['ngResource'])

    .factory('restaurantsFactory', function ($resource, API_URL) {
        return $resource(API_URL + '/restaurants/:id', {},
            {
                'query': {
                    method: 'GET',
                    isArray: false
                }
            })
    })
    .factory('cartsFactory', function ($resource, API_URL) {
        return $resource(API_URL + '/carts/:id', {id: '@id'}, {
            'post': {
                method: 'POST'
            },
            'put': {
                method: 'PUT'
            }
        });

    });
