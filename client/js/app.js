// Constants
var PHONE_SCREEN_MAX_WIDTH = 768;
var TABLET_SCREEN_MAX_WIDTH = 992;
var SMALL_DESKTOP_SCREEN_MAX_WIDTH = 1200;

// Utilities methods
function getRowCount() {
  if (window.innerWidth <= PHONE_SCREEN_MAX_WIDTH ) {
    return 2;
  } else if (window.innerWidth <= TABLET_SCREEN_MAX_WIDTH) {
    return 3;
  } else if (window.innerWidth <= SMALL_DESKTOP_SCREEN_MAX_WIDTH) {
    return 6;
  } else {
    return 12;
  }
};

function getPartialHtml(partial) {
  
};

// Define the main module 
var module = angular.module('moviestore_app', []);

module.controller('main_ctrl', ['$scope', '$http', '$location',
  function($scope, $http, $location) {
    $scope.title = "Movie Store";
    $scope.lastIndex = -1;

    $http.get('/api/movies')
      .success(function(data, status, headers, config) {
        $scope.movies = data;
      })
      .error(function(data, status, headers, config) {
        $scope.movies = [];
      });
    

    $scope.showDetails = function(id) {
      var imgContainer = $("#movie_"+id).parent();
      var index = imgContainer.parent().children().index(imgContainer)
      
      if ($scope.lastIndex === index) { // refresh the details
        $('#expand-row').slideToggle('slow');
      } else { // Remove the container, and then add new item
        $scope.lastIndex = index;
        $('#expand-row').remove();
        var total = imgContainer.parent().children().length;
        // get some row and index information, and then 
        // calculate the position where we want to insert
        // expand row into
        var rowCount = getRowCount();
        var row = imgContainer.parent();
        var rowIndex = Math.floor(index / rowCount + 1);
        var insertTo = (rowCount * rowIndex - 1) >= (total - 1) ? total - 1 : rowCount * rowIndex - 1;
        row.children(':eq(' + insertTo + ')').after('<div id="expand-row" class="col-md-12 expandable"><p>Hello World</p></div>');
        $('#expand-row').slideToggle('slow');
      } 
    }
  }]);
  

