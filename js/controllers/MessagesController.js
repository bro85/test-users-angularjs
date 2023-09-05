app.controller('MessagesController', function MessagesController($scope){

  $scope.errorArr = [];
  $scope.successArr = [];

  $scope.addErrorMessage = function (txt){
    // Get unique key
    const curTime = (new Date().valueOf()).toString();

    // Add message to array
    $scope.errorArr.push([curTime, txt]);

    // Remove message from array
    setTimeout( function (){
      const i = $scope.errorArr.findIndex( item => item[0] === curTime );
      $scope.errorArr.splice(i, 1);
      $scope.$apply();
    }, 3000 );
  };

  $scope.addSuccessMessage = function (txt){
    // Get unique key
    const curTime = (new Date().valueOf()).toString();

    // Add message to array
    $scope.successArr.push([curTime, txt]);

    // Remove message from array
    setTimeout( function (){
      const i = $scope.successArr.findIndex( item => item[0] === curTime );
      $scope.successArr.splice(i, 1);
      $scope.$apply();
    }, 3000 );
  };

  $scope.$on('addErrorMessageEmit', function(event, txt) {
    $scope.addErrorMessage(txt);
  });

  $scope.$on('addSuccessMessageEmit', function(event, txt) {
    $scope.addSuccessMessage(txt);
  });

});
