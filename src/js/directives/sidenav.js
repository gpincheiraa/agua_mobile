(function() {
  'use strict';
  
  angular
    .module('MedicionAgua')
    .directive('sidenav', directive);
  
  function directive(){
    
    var ddo = {
        link: link,
        restrict: 'A',
    };
    return ddo;
  
    function link(scope, element, attrs){
      element.sideNav();
    }
  }

})();