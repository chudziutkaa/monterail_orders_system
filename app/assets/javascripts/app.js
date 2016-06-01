angular.module('ordersApi', ['ui.router', 'templates'])

.config([
  '$stateProvider',
  '$urlRouterProvider',
  function($stateProvider, $urlRouterProvider) {

    $stateProvider
      .state('home', {
        url: '/home',
        templateUrl: 'home/_home.html',
        controller: 'OrdersCtrl',
        resolve: {
          postPromise: ['orders', function(orders){
            return orders.getAll();
          }]
      }})
      .state('orders', {
        url: '/orders/{id}',
        templateUrl: 'orders/_orders.html',
        controller: 'MealsCtrl',
        resolve: {
          order: ['$stateParams', 'orders', function($stateParams, orders) {
          return orders.get($stateParams.id);
        }]
        }
      });

    $urlRouterProvider.otherwise('home');
}]);
