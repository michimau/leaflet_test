import "plugins/leaflet-wms/leaflet-wms.less";
import 'plugins/leaflet-wms/leaflet-wms_controller';

import visTemplate from 'plugins/leaflet-wms/leaflet-wms.html';
import paramsTemplate from 'plugins/leaflet-wms/leaflet-wms_params.html';

import {CATEGORY} from 'ui/vis/vis_category';
import {VisFactoryProvider} from 'ui/vis/vis_factory';
import {VisTypesRegistryProvider} from 'ui/registry/vis_types';
import {VisSchemasProvider} from 'ui/vis/editors/default/schemas';

VisTypesRegistryProvider.register(leafletwmsProvider);

function leafletwmsProvider(Private) {
  const VisFactory = Private(VisFactoryProvider);
  const Schemas = Private(VisSchemasProvider);

 return VisFactory.createAngularVisualization({
    name: 'leaflet-wms',
    title: 'leaflet-wms',
    description: 'leaflet test',
    icon: 'fa-map',
    category: CATEGORY.MAP, 
    responseHandler: 'none',
    visConfig: {
      defaults: {
        perPage: 10,
        showPartialRows: false
      },
      template: visTemplate,
    },
    editorConfig: {
      optionsTemplate: paramsTemplate,
      schemas: new Schemas([{
        group: 'metrics',
        name: 'metric',
        title: 'Metric',
        min: 1,
      }, {
        group: 'buckets',
        name: 'bucket',
        title: 'Split Rows'
      }, {
        group: 'buckets',
        name: 'split',
        title: 'Split Table'
      }]),
    }
  });
}

export default leafletwmsProvider;