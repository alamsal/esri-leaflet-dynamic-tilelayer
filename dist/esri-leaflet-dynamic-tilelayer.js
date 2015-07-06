(function (factory) {
  //define an AMD module that relies on 'leaflet'
  if (typeof define === 'function' && define.amd) {
    define(['leaflet', 'esri-leaflet'], function (L, EsriLeaflet) {
      return factory(L, EsriLeaflet);
    });
  //define a common js module that relies on 'leaflet'
  } else if (typeof module === 'object' && typeof module.exports === 'object') {
    module.exports = factory(require('leaflet'), require('esri-leaflet'));
  }

  if(typeof window !== 'undefined' && window.L){
    factory(window.L, L.esri);
  }
}(function (L, EsriLeaflet) {


EsriLeaflet.Layers.TiledDynamicMapLayer=L.TileLayer.extend({options:L.Util.extend({},EsriLeaflet.Layers.DynamicMapLayer.prototype.options),_requests:[],initialize:function(a,b){L.TileLayer.prototype.initialize.call(this,a,b),EsriLeaflet.DynamicMapLayer.prototype.initialize.call(this,a,b)},onAdd:function(a){if(a.options.crs&&a.options.crs.code){var b=a.options.crs.code.split(":")[1];this.options.bboxSR=b,this.options.imageSR=b}return a.on("zoomstart zoomend",this._onZoom,this),L.TileLayer.prototype.onAdd.call(this,a)},onRemove:function(a){a.off("zoomstart zoomend",this._onZoom,this),L.TileLayer.prototype.onRemove.call(this,a),EsriLeaflet.DynamicMapLayer.prototype.onRemove.call(this,a)},setLayers:function(a){this._reset(),EsriLeaflet.Layers.DynamicMapLayer.prototype.setLayers.call(this,a)},setLayerDefs:function(a){this._reset(),EsriLeaflet.Layers.DynamicMapLayer.prototype.setLayerDefs.call(this,a)},setTimeOptions:function(a){this._reset(),EsriLeaflet.Layers.DynamicMapLayer.prototype.setTimeOptions.call(this,a)},_onZoom:function(a){this._zooming="zoomstart"===a.type},_buildExportParams:function(a,b){var c=this._map.options.crs.project(a._northEast),d=this._map.options.crs.project(a._southWest),e=this._map.latLngToLayerPoint(a._northEast),f=this._map.latLngToLayerPoint(a._southWest);(e.y>0||f.y<b.y)&&(b.y=f.y-e.y);var g={bbox:[d.x,d.y,c.x,c.y].join(","),size:b.x+","+b.y,dpi:96,format:this.options.format,transparent:this.options.transparent,bboxSR:this.options.bboxSR,imageSR:this.options.imageSR};return this.options.layers&&(g.layers="show:"+this.options.layers.join(",")),this.options.layerDefs&&(g.layerDefs=JSON.stringify(this.options.layerDefs)),this.options.timeOptions&&(g.timeOptions=JSON.stringify(this.options.timeOptions)),this.options.from&&this.options.to&&(g.time=this.options.from.valueOf()+","+this.options.to.valueOf()),this._service.options.token&&(g.token=this._service.options.token),g},_loadTile:function(a,b){a._layer=this,a.onload=this._tileOnLoad,a.onerror=this._tileOnError,this._adjustTilePoint(b),this.getTileUrl(b,function(b,c){a.src=c}),this.fire("tileloadstart",{tile:a})},getTileUrl:function(a,b){var c=this._map,d=this.options.tileSize,e=a.multiplyBy(d),f=e.add([d,d]),g=new L.LatLngBounds(c.unproject(e,a.z),c.unproject(f,a.z)),h=new L.Point(this.options.tileSize,this.options.tileSize),i=this._buildExportParams(g,h);this._requestExport(i,g,b)},_requestExport:function(a,b,c){"json"===this.options.f?this._requests.push(this._service.get("export",a,function(a,d){c(null,d.href,b)},this)):(a.f="image",this._renderImage(this.options.url+"export"+L.Util.getParamString(a),b))},_update:function(){this._map&&this._map._animatingZoom||L.TileLayer.prototype._update.call(this)}}),function(a){for(var b=0,c=a.length;c>b;b++)EsriLeaflet.Layers.TiledDynamicMapLayer.prototype[a[b]]=EsriLeaflet.Layers.DynamicMapLayer.prototype[a[b]]}(["getLayers","getLayerDefs","getTimeOptions","setTimeOptions","metadata","query","identify","find","_getPopupData","_propagateEvent"]),EsriLeaflet.tiledDynamicMapLayer=function(a,b){return new EsriLeaflet.Layers.TiledDynamicMapLayer(a,b)};
//# sourceMappingURL=esri-leaflet-dynamic-tilelayer.js.map

  return EsriLeaflet;
}));