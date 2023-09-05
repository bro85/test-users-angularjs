app.controller('FormController', function FormController($scope, usersService){

  $scope.addNewUser = function (user){
    usersService.add(user);
    $scope.$emit('updateUsersEmit');
    $scope.$emit('addSuccessMsgEmit', 'New user '+ user.username +' was created.');
  };

  $scope.addErrorMessage = function (txt){
    $scope.$emit('addErrorMsgEmit', txt);
  };

});
