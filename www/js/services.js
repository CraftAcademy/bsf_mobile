angular.module('slowfood.services', [])

.factory('FakeRestaurants', function() {

  var restaurants = [{
    "id": 2,
    "name": "Homemade Thai Food Court",
    "description": "Libero voluptatibus facere necessitatibus omnis consequatur delectus molestiae. Corrupti quia eaque. Numquam pariatur necessitatibus occaecati dolorem.",
    "user_id": null,
    "street": null,
    "zipcode": null,
    "town": null,
    "latitude": 57.6945602,
    "longitude": 11.9745962,
    "category": "Thai"
  }, {
    "id": 3,
    "name": "Skitbra Vegan Place",
    "description": "Tempora voluptatem vero ad vitae nostrum consequatur beatae. Nobis consequatur laudantium tenetur a enim.",
    "user_id": null,
    "street": null,
    "zipcode": null,
    "town": null,
    "latitude": 57.6977848,
    "longitude": 11.9708588,
    "category": "Vegan"
  }, {
    "id": 4,
    "name": "Local Vegan House",
    "description": "Architecto voluptate sed dolore est deleniti. Et incidunt consequatur.",
    "user_id": null,
    "street": null,
    "zipcode": null,
    "town": null,
    "latitude": 57.6959108,
    "longitude": 11.9734373,
    "category": "Vegan"
  }, {
    "id": 5,
    "name": "Homemade Thai House",
    "description": "Non sit provident. Quo dolorem expedita. Quam voluptas ab.",
    "user_id": null,
    "street": null,
    "zipcode": null,
    "town": null,
    "latitude": 57.7072458,
    "longitude": 11.96967,
    "category": "Thai"
  }, {
    "id": 6,
    "name": "Skitbra Vegan Place",
    "description": "Sed et sit consequatur voluptatem. Mollitia non sint corporis fugiat placeat qui. Ea repudiandae debitis quos.",
    "user_id": null,
    "street": null,
    "zipcode": null,
    "town": null,
    "latitude": 57.6975531,
    "longitude": 11.9751022,
    "category": "Vegan"
  }
];

  return {
    all: function() {
      return restaurants;
    }
  };
})

.factory('Restaurants', function($resource, API_URL) {
  return $resource(API_URL + '/restaurants', {});
});
