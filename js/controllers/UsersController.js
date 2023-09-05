app.controller('UsersController', function UsersController($scope, usersService){

  $scope.showNewUserForm = false;
  $scope.showEditUserForm = false;

  $scope.updateUsers = function (){
    $scope.users = usersService.get();
  };

  $scope.showNewUserFormFn = function (){
    if (!$scope.showEditUserForm){
      $scope.showNewUserForm = true;
    }
  };

  $scope.hideNewUserFormFn = function (){
    $scope.showNewUserForm = false;
  };

  $scope.hideEditUserFormFn = function (){
    $scope.showEditUserForm = false;
  };

  $scope.addErrorMsg = function (txt){
    $scope.$broadcast('addErrorMessageEmit', txt);
  };

  $scope.showEditForm = function (param){
    if (!$scope.showNewUserForm){
      $scope.showEditUserForm = true;
      $scope.user = {
        email: param.email,
        first_name: param.first_name,
        last_name: param.last_name,
        password: param.password,
        user_type: param.user_type,
        username: param.username
      };
    }
  };

  $scope.updateUsers();

  $scope.$on('updateUsersEmit', function() {
    $scope.updateUsers();
  });

  $scope.$on('addErrorMsgEmit', function(event, txt) {
    $scope.addErrorMsg(txt);
  });

  $scope.$on('addSuccessMsgEmit', function(event, txt) {
    $scope.$broadcast('addSuccessMessageEmit', txt);
  });

});
