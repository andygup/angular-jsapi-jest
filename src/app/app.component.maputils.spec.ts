import esriMapUtils from './app.component.maputils';
// let esriMapUtils = require('./app.component.maputils');

describe('EsriMapUtils', () => {

  it('Point geometry test 1', () => {
    const point = esriMapUtils.convertJSONToPoint();
    console.log(point.spatialReference.wkid);
    expect(point.spatialReference.wkid).toEqual(4326);
  });

  it('SMS test 1', () => {
    const sms = esriMapUtils.convertJSONToSMS();
    console.log(sms.declaredClass);
    expect(sms.declaredClass).toEqual('esri.symbols.SimpleMarkerSymbol');
  });
});
