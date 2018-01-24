import { uiModules } from 'ui/modules';
const module = uiModules.get('kibana/leaflet-wms_values_vis', ['kibana']);
//import { leafletwms } from 'leaflet.wms';
 
    module.controller('leafletwmsController', function($scope, $element, $rootScope, Private) {
        console.log (L);

        var map = null;
        map = L.map('#map-vis', {
          scrollWheelZoom: true,
          wheelPxPerZoomLevel: 5,
          wheelDebounceTime: 40,
          zoomDelta: 0.5,
          center: [53, 11],
          zoom: 4,
          maxZoom: 30,
          minZoom: 3
        });

       $scope.$watchMulti(['esResponse', 'vis.aggs'], function([resp]) {
            console.log('leafletwmsControllerWatch');
        }, true);
      });
