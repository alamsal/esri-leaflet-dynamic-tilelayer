describe('L.esri.Layers.TiledDynamicMapLayer', function() {

  function createMap() {
    // create container
    var container = document.createElement('div');

    // give container a width/height
    container.setAttribute('style', 'width:500px; height: 500px;');

    // add contianer to body
    document.body.appendChild(container);

    return L.map(container).setView([37.75, -122.45], 12);
  }

  var url = 'http://services.arcgis.com/mock/arcgis/rest/services/MockMapService/MapServer';
  var layer;
  var server;
  var map;


  beforeEach(function() {
    server = sinon.fakeServer.create();
    layer = L.esri.dynamicMapLayer(url, {
      f: 'json'
    });
    map = createMap();
  });

  afterEach(function() {
    server.restore();
    map.remove();
  });

  // it('should expose the legend method on the underlying service', function() {
  //   var spy = sinon.spy(layer._service, 'legend');

  //   server.respond();
  // });

});
