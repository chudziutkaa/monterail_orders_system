angular.module('ordersApi', ['ui.router', 'templates', 'Devise'])

.run(function($rootScope,$interval){
  $rootScope.AssignedDate = Date;
    
  $interval(function(){
  },1000)
})

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
      })
      .state('login', {
      url: '/login',
      templateUrl: 'auth/_login.html',
      controller: 'AuthCtrl',
      onEnter: ['$state', 'Auth', function($state, Auth) {
        Auth.currentUser().then(function (){
          $state.go('home');
        })
      }]
    })
    .state('register', {
      url: '/register',
      templateUrl: 'auth/_register.html',
      controller: 'AuthCtrl',
      onEnter: ['$state', 'Auth', function($state, Auth) {
        Auth.currentUser().then(function (){
          $state.go('home');
        })
      }]
    });

    $urlRouterProvider.otherwise('home');
}]);
