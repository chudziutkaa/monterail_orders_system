angular.module('ordersApi')

.controller('MealsCtrl', [
  '$scope',
  'orders',
  'order',
  function($scope, orders, order) {
    $scope.order = order;

    $scope.addMeal = function() {
      orders.addMeal(order.id, {
        name: $scope.name,
        price: $scope.price,
      }).success(function(meal) {
        $scope.order.meals.push(meal);
      });
      $scope.name = '';
      $scope.price = '';
    };
}])
