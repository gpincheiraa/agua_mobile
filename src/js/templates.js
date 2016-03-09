angular.module('MedicionAgua').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('src/views/login.html',
    "<div class=\"row\">\n" +
    "  \n" +
    "  <form class=\"col s8 offset-s2\" name=\"loginForm\" ng-submit=\"login.loginGo(login.user)\">\n" +
    "    \n" +
    "    <h4>Control de medidores de agua</h4>\n" +
    "\n" +
    "    <div class=\"row\">\n" +
    "      <label for=\"first_name\">Email</label>\n" +
    "      <input id=\"first_name\" type=\"email\" class=\"validate\" ng-model=\"login.user.email\" required>\n" +
    "    </div>\n" +
    "    \n" +
    "    <div class=\"row\">\n" +
    "      <label for=\"last_name\">Contraseña</label>\n" +
    "      <input id=\"last_name\" type=\"password\" class=\"validate\" ng-model=\"login.user.password\" required>\n" +
    "    </div>\n" +
    "    \n" +
    "    <button class=\"btn waves-effect waves-light indigo accent-2\" type=\"submit\" name=\"action\" ng-disabled=\"loginForm.$invalid\">\n" +
    "      Ingresar\n" +
    "      <i class=\"material-icons right\">send</i>\n" +
    "    </button>\n" +
    "    \n" +
    "  </form>\n" +
    "</div>"
  );


  $templateCache.put('src/views/main.html',
    "<div ui-view=\"navbar\"></div>\n" +
    "<div class=\"app-section\" ui-view=\"main\"></div>"
  );


  $templateCache.put('src/views/navbar.html',
    "<div class=\"app-navbar row indigo accent-2 z-depth-2\">\n" +
    "  <h4>Navbar</h4>\n" +
    "  <a data-activates=\"slide-out\" class=\"button-collapse\" sidenav><i class=\"mdi-navigation-menu\"></i></a>\n" +
    "</div>\n" +
    "<nav>\n" +
    "  <ul id=\"slide-out\" class=\"side-nav\">\n" +
    "    <li><a>First Sidebar Link</a></li>\n" +
    "    <li><a>Second Sidebar Link</a></li>\n" +
    "  </ul>\n" +
    "  \n" +
    "</nav>"
  );


  $templateCache.put('src/views/sector.html',
    "<div class=\"row\">\n" +
    "  <a ui-sref=\"medicion.sectores\">Volver a Todos los Sectores</a>\n" +
    "</div>\n" +
    "<div class=\"row\">\n" +
    "  <h5>Sector <span ng-bind=\"sector.sectorSeleccionado.id\"></span></h5>\n" +
    "  \n" +
    "  <div class=\"col s12\" ng-repeat=\"sitio in sector.sectorSeleccionado.sitios track by sitio.id\">\n" +
    "    <div class=\"row sector-item z-depth-2\">\n" +
    "      <div class=\"col s12\">\n" +
    "        <h5 ng-bind=\"sitio.nombre\"></h5> \n" +
    "      </div>\n" +
    "      <div class=\"col s6\">\n" +
    "        Propietario: <span ng-bind=\"sitio.propietario\"></span>\n" +
    "      </div>\n" +
    "      <div class=\"col s6\">\n" +
    "        Ultima Lectura: \n" +
    "      </div>\n" +
    "\n" +
    "    </div>\n" +
    "  </div>\n" +
    "\n" +
    "</div>"
  );


  $templateCache.put('src/views/sectores.html',
    "<div class=\"row\">\n" +
    "  <h5>Seleccione Condominio</h5>\n" +
    "  <select ng-model=\"sectores.condominioSeleccionado\" ng-options=\"condominio.id as condominio.nombre for condominio in sectores.listaCondominios\"></select>\n" +
    "</div>\n" +
    "<div class=\"row\">\n" +
    "  <h5>Sectores</h5>\n" +
    "  \n" +
    "  <div class=\"col s12\" ng-repeat=\"sector in sectores.listaSectores track by sector.id\">\n" +
    "    <div class=\"row sector-item z-depth-2\" ng-click=\"sectores.sectorGo(sector.id)\">\n" +
    "      <div class=\"col s12\">\n" +
    "        <h5 ng-bind=\"sector.nombre\"></h5> \n" +
    "      </div>\n" +
    "      <div class=\"col s6\">\n" +
    "        Sitios: <span ng-bind=\"sector.sitios\"></span>\n" +
    "      </div>\n" +
    "      <div class=\"col s6\">\n" +
    "        Revisados: <span ng-bind=\"sector.completado\"></span> %\n" +
    "      </div>\n" +
    "\n" +
    "    </div>\n" +
    "  </div>\n" +
    "\n" +
    "</div>"
  );

}]);
