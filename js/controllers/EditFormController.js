app.controller('EditFormController', function FormController($scope, usersService){

  $scope.addErrorMessage = function (txt){
    $scope.$emit('addErrorMsgEmit', txt);
  };

  $scope.editUser = function (user){
    usersService.update(user);
    $scope.$emit('updateUsersEmit');
    $scope.$emit('addSuccessMsgEmit', 'User '+ user.username +' was edited.');
  };

  $scope.deleteUser = function (user){
    usersService.delete(user);
    $scope.$emit('updateUsersEmit');
    $scope.$emit('addSuccessMsgEmit', 'User '+ user.username +' was deleted.');
  };

});
