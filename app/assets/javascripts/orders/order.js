angular.module('ordersApi')

.factory('orders', ['$http', function($http) {
  var o = {
    orders: []
  };

  o.getAll = function() {
    return $http.get('/orders.json').success(function(data){
      angular.copy(data, o.orders);
    });
  };

  o.create = function(order) {
    return $http.post('/orders.json', order).success(function(data){
      o.orders.push(data);
    });
  };

  o.addMeal = function(id, meal) {
    return $http.post('/orders/' + id + '/meals.json', meal);
  };

  o.get = function (id) {
    return $http.get('/orders/' + id + '.json').then(function(res){
      return res.data;
    });
  };

  o.finalize = function(order) {
    return $http.put('/orders/' + order.id + '/finalize.json')
      .success(function(data){
        order.status = "finalized";
      });
  };

  o.deliver = function(order) {
    return $http.put('/orders/' + order.id + '/deliver.json')
      .success(function(data){
        order.status = "delivered";
      });
  }; 

  o.order = function(order) {
    return $http.put('/orders/' + order.id + '/order.json')
      .success(function(data){
        order.status = "ordered";
      });
  }; 

  return o;
}])