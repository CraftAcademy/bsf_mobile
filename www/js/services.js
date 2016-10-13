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
