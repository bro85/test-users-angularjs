app.directive('uniqueNameDirective', function(usersService) {
  return {
    require: 'ngModel',
    link: function(scope, element, attr, mCtrl) {
      function uniqueNameValidation(value) {
        const users = usersService.get();
        let username = ''; // Entered username
        // Find match of new username with username on localstorage
        const enumResult = users.find( item => {
          username = item.username;
          return item.username.trim().toLowerCase() === value.trim().toLowerCase()
        } );
        if (enumResult){
        // If username is busy
          mCtrl.$setValidity('uniqueName', false);
          scope.addErrorMessage('The username "'+ username +'" is busy. Set a unique name.');
        } else {
          mCtrl.$setValidity('uniqueName', true);
        }
        return value;
      }
      mCtrl.$parsers.push(uniqueNameValidation);
    }
  };
});

app.directive('passwordSymbolsDirective', function() {
  return {
    require: 'ngModel',
    link: function(scope, element, attr, mCtrl) {
      function passwordSymbolsValidation(value) {
        let arr = value.split('');
        let isNumber = false;
        let isString = false;
        arr.forEach( item => {
          if (!isNumber && !isNaN(item)) isNumber = true;
          if (!isString && ( /^[A-Za-z]+$/.test(item) )) isString = true;
        } );
        if (value.length > 7 && (!isNumber || !isString)){
        // If the rule 'at least one number and one letter' not followed
          mCtrl.$setValidity('symbols', false);
          scope.addErrorMessage('Must be at least one number and one letter.');
        } else {
          mCtrl.$setValidity('symbols', true);
        }
        return value;
      }
      mCtrl.$parsers.push(passwordSymbolsValidation);
    }
  };
});

app.directive('matchPasswordDirective', function() {
  return {
    require: 'ngModel',
    link: function(scope, element, attr, mCtrl) {
      function matchPasswordValidation(value) {
        if (value.length > 7 && scope.form.password.$viewValue !== value){
          mCtrl.$setValidity('repeatPassword', false);
        } else {
          mCtrl.$setValidity('repeatPassword', true);
        }
        return value;
      }
      mCtrl.$parsers.push(matchPasswordValidation);
    }
  };
});

app.directive('matchEditPasswordDirective', function() {
  return {
    require: 'ngModel',
    link: function(scope, element, attr, mCtrl) {
      function matchEditPasswordValidation(value) {
        if (value.length > 7 && scope.editForm.password.$viewValue !== value){
          mCtrl.$setValidity('repeatPassword', false);
        } else {
          mCtrl.$setValidity('repeatPassword', true);
        }
        return value;
      }
      mCtrl.$parsers.push(matchEditPasswordValidation);
    }
  };
});
