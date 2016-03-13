var module = angular.module('moviestore_app', []);

module.controller('main_ctrl', ['$scope', '$http', 
                              function($scope, $http) {
    $scope.title = "Movie Store";
    
    $http.get('/api/list')
     .success(function(data, status, headers, config) {
        $scope.movies = data;
      })
      .error(function(data, status, headers, config) {
        $scope.movies = [];
      });
  }]);