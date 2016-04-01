(function() {
  'use strict';
  
  angular
    .module('MedicionAgua')
    .factory('SectorsService', factory);
  
  //factory.$inject = ['dependencies'];
  
  function factory() {
    var service = {
      getSectors: getAll,
      getSector: get
    };
    
    return service;

    function get(_id){
      return {
        id: _id,
        sitios: [
          { id: 1,
            nombre: 'Sitio 1',
            propietario: 'Sebastián Jiménez'
          },
          { id: 2,
            nombre: 'Sitio 2',
            propietario: 'Rossana Burgos'
          },
          { id: 3,
            nombre: 'Sitio 3',
            propietario: 'Jennyfer Gallardo'
          },
          { id: 4,
            nombre: 'Sitio 2',
            propietario: 'Gonzalo Pincheira'
          },
        ]
      };
    }
        
    function getAll() {
      return [
        { id: 1,
          nombre: 'Sector 1',
          completado: 25,
          sitios: 14
        },
        { id: 2,
          nombre: 'Sector 2',
          completado: 35,
          sitios: 15
        },
        { id: 3,
          nombre: 'Sector 3',
          completado: 55,
          sitios: 34
        },
        { id: 4,
          nombre: 'Sector 4',
          completado: 10,
          sitios: 22
        },
        { id: 5,
          nombre: 'Sector 5',
          completado: 15,
          sitios: 12
        },
        { id: 6,
          nombre: 'Sector 6',
          completado: 45,
          sitios: 18
        },
        { id: 7,
          nombre: 'Sector 7',
          completado: 65,
          sitios: 15
        },
        { id: 8,
          nombre: 'Sector 8',
          completado: 80,
          sitios: 12
        },
        { id: 9,
          nombre: 'Sector 9',
          completado: 90,
          sitios: 6
        },
        { id: 10,
          nombre: 'Sector 10',
          completado: 40,
          sitios: 11
        }
      ];
    }
  

  }
})();