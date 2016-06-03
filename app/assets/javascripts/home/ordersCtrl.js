angular.module('ordersApi')

.controller('OrdersCtrl', [
  '$scope',
  'orders',
  function($scope, orders) {
    $scope.orders = orders.orders;

    $scope.addOrder = function() {
      orders.create({
        restaurant_name: $scope.restaurant_name,
      });
      $scope.restaurant_name = '';
    };
}])

.directive('orderMeals', function(){
  return {
    templateUrl: 'orders/_orders.html'
  }
});
