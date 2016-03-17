var module = angular.module('moviestore_app', []);

module.controller('main_ctrl', ['$scope', '$http', '$location',
  function($scope, $http, $location) {
    $scope.title = "Movie Store";

    $http.get('/api/list')
      .success(function(data, status, headers, config) {
        $scope.movies = data;
      })
      .error(function(data, status, headers, config) {
        $scope.movies = [];
      });

    $scope.goto_details = function(id) {
      $location.path("/movie/" + id);
    }
  }]);
