var module = angular.module('moviestore_app', []);

module.controller('main_ctrl', ['$scope', '$http', '$location',
  function($scope, $http, $location) {
    $scope.title = "Movie Store";

    $http.get('/api/movies')
      .success(function(data, status, headers, config) {
        $scope.movies = data;
      })
      .error(function(data, status, headers, config) {
        $scope.movies = [];
      });

    $scope.showDetails = function(id) {
      //$location.path("/movie/" + id);
      //$(".movie_"+id).click(toggleMovieDetails);
      $(this).parent(".col-md-2").siblings(".expandable").slideToggle('slow');
    }
  }]);
