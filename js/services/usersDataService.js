app.factory('usersService', function (){
  return {
    get: function (){
      let users = [];
      if ( localStorage.getItem('usersData') ){
        users = JSON.parse( localStorage.getItem('usersData') );
      }
      return users;
    },
    add: function (user){
      let users = [];
      if ( localStorage.getItem('usersData') ){
        users = JSON.parse( localStorage.getItem('usersData') );
      }
      users.push(user);
      localStorage.setItem('usersData', JSON.stringify(users));
    },
    update: function (user){
      let users = [];
      if ( localStorage.getItem('usersData') ){
        users = JSON.parse( localStorage.getItem('usersData') );
      }

      const updatedList = users.map( item => {
        if (item.username === user.username){
          return user;
        } else {
          return item;
        }
      } );

      localStorage.removeItem('usersData');
      localStorage.setItem('usersData', JSON.stringify(updatedList));
    },
    delete: function (user){
      let users = [];
      if ( localStorage.getItem('usersData') ){
        users = JSON.parse( localStorage.getItem('usersData') );
      }
      const index = users.findIndex( item => item.username === user.username );
      users.splice(index,1);
      localStorage.removeItem('usersData');
      localStorage.setItem('usersData', JSON.stringify(users));
    },
  };
});
