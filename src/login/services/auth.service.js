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
          role: 'superadmin',
          token: 'f9099b1669933d7f6470f26061823839',
          condos_assigned: [{id:1, name: 'Campor Mar'}, {id:2, name: 'Rio Mar'}]
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