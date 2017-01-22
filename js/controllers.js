angular.module('navigation', [])
  .controller('NavController', ['$scope', '$location', function($scope, $location) {
    $scope.getClass = function(path) {
      return ($location.path().substr(0, path.length) === path) ? 'active' : '';
    }
  }]);

angular.module('contactForm', [])
  .controller('ContactFormController', ['$scope', function($scope) {
    $scope.submit = function() {
      $scope.name = '';
      $scope.email = '';
      $scope.phone = '';
      $scope.message = '';
      $scope.success = 'Tack för ditt meddelande, vi återkommer så snart vi kan.';
    };
  }]);

angular.module('pageControllers', [])
  .controller('AboutController', ['$scope', '$http', function($scope, $http) {
    $http.get('data/data.json').success(function(data) {
      $scope.employees = data.employees;
    });
  }])
  .controller('BookingController', ['$scope', '$http', '$filter', function($scope, $http, $filter) {
    $http.get('data/data.json').success(function(data) {
      $scope.employees = data.employees;
    });

    if ($scope.bookings === undefined) {
      $scope.bookings = [];
    }

    $scope.submit = function() {
      var found = $filter('filter')($scope.employees, { id: $scope.teacher }, true);
      if (!found.length) {
        return;
      }
      var teacher = found[0];

      $scope.bookings.push({
        date: $filter('date')(new Date($scope.date), 'yyyy-MM-dd HH:mm'),
        teacher: teacher.name,
        student: $scope.name
      });

      $scope.teacher = '';
      $scope.date = '';
      $scope.name = '';
    };
  }]);
