angular.module('slowfood.services', [])

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
        return $resource(API_URL + '/carts', {}, {
            'post': {
                method: 'POST'
            },
            'put': {
                method: 'PUT'
            }
        })
    });
