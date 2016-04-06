(function(){

  'use strict';

  angular
    .module('MedicionAgua')
    .service('AuthService', Service);

    //Service.$inject = ['AuthService'];
    
    function Service(){

      var self = this,
          user = null;


      self.login = login;
      self.setUser = setUser;
      self.getUser = getUser;
      
      function login(_user){
        //Login and set user with the response
        setUser({
          role: 'user',
          token: 'f9099b1669933d7f6470f26061823839',
          sectors_assigned: [{id:1, name: 'Las Palmas'}, {id:2, name: 'Las Liebres'}]
        });
 
      }

      function getUser(){
        return user;
      }

      function setUser(_user){
        user = _user;
      }

    }
})();