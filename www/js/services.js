angular.module('slowfood.services', [])

.factory('Restaurants', function() {

  var restaurants = [{
    id: 1,
    name: "Restaurant 1",
    category: "Thai"
  }, {
    id: 2,
    name: "Restaurant 2",
    category: "Vegan"
  }, {
    id: 3,
    name: "Restaurant 3",
    category: "Pizza"
  }, {
    id: 4,
    name: "Restaurant 4",
    category: "Other"
  }];

  return {
    all: function() {
      return restaurants;
    }
  };
});
