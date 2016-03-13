var module = angular.module('moviestore_app', []);

module.controller('main_ctrl', [$scope, function($scope){
    $scope.title = "Movie Store";
    $scope.message = "Hello message from main controller";
}]);