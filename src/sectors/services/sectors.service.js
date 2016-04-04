(function() {
  'use strict';
  
  angular
    .module('MedicionAgua')
    .factory('SectorsService', factory);
  
  factory.$inject = ['APP_SETTINGS', '$resource'];
  
  function factory(APP_SETTINGS, $resource) {

    var vm = this,
      sectoresResourceUrl = APP_SETTINGS.BASE_URL + '/condos/:idcondo/sectors/:idsector',
      getAll,
      get,
      getAssigned;

    vm.condosResource = $resource(sectoresResourceUrl, {idcondo: '@idcondo', idsector: '@idsector'})
    var service = {
      getSectors: getAll,
      getSector: get,
      getAssigned: getAssigned,
      getSectorsAssigned: getSectorsAssigned,
      getPlots: getPlots
    };
    
    return service;

    // Gets the sector assigned for the logged user.
    function getSectorsAssigned(){
      return [{
        "id": 1,
        "name": "Las Palmas",
        "created_at": "2016-04-01T13:03:21.401Z",
        "updated_at": "2016-04-01T13:03:21.401Z",
        "condo_id": 1
      },
      {
        "id": 2,
        "name": "Las Liebres",
        "created_at": "2016-04-01T13:03:21.408Z",
        "updated_at": "2016-04-01T13:03:21.408Z",
        "condo_id": 1
      }];
    }

    function getPlots(_idSector){
      return [
        {
          "id": 2,
          "plot_number": "2",
          "owner": "Jenny",
          "meters": [
            {
              "id": 2,
              "number": "102",
              "status": "active",
              "last_measure": {
                "id": 20,
                "value": 1000,
                "created_at": "2016-04-01T13:03:22.556Z",
                "comment": "blah blah",
                "status": null,
                "last_measurer": "Jenny"
              }
            }
          ]
        },
        {
          "id": 4,
          "plot_number": "4",
          "owner": "Jenny",
          "meters": [
            {
              "id": 4,
              "number": "104",
              "status": "active",
              "last_measure": {
                "id": 40,
                "value": 1000,
                "created_at": "2016-04-01T13:03:22.897Z",
                "comment": "blah blah",
                "status": null,
                "last_measurer": "Jenny"
              }
            }
          ]
        },
        {
          "id": 6,
          "plot_number": "6",
          "owner": "Jenny",
          "meters": [
            {
              "id": 6,
              "number": "106",
              "status": "active",
              "last_measure": {
                "id": 60,
                "value": 1000,
                "created_at": "2016-04-01T13:03:23.231Z",
                "comment": "blah blah",
                "status": null,
                "last_measurer": "Jenny"
              }
            }
          ]
        },
        {
          "id": 8,
          "plot_number": "8",
          "owner": "Jenny",
          "meters": [
            {
              "id": 8,
              "number": "108",
              "status": "active",
              "last_measure": {
                "id": 80,
                "value": 1000,
                "created_at": "2016-04-01T13:03:23.606Z",
                "comment": "blah blah",
                "status": null,
                "last_measurer": "Jenny"
              }
            }
          ]
        },
        {
          "id": 10,
          "plot_number": "10",
          "owner": "Seba",
          "meters": [
            {
              "id": 10,
              "number": "110",
              "status": "active",
              "last_measure": {
                "id": 100,
                "value": 1000,
                "created_at": "2016-04-01T13:03:23.947Z",
                "comment": "blah blah",
                "status": null,
                "last_measurer": "Jenny"
              }
            }
          ]
          }
        ];
    }

    function getAll(){}
    function get(){}
  

  }
})();