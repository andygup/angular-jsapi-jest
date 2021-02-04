import esriMapUtils from './app.component.maputils';

describe('EsriMapUtils', () => {

  it('Point geometry test 1', () => {
    const point = esriMapUtils.convertJSONToPoint();
    console.log(point.spatialReference.wkid);
    expect(point).toHaveProperty('spatialReference');
  });

  it('SMS test 1', () => {
    const sms = esriMapUtils.convertJSONToSMS();
    console.log(sms.declaredClass);
    expect(sms.declaredClass).toEqual('esri.symbols.SimpleMarkerSymbol');
  });
});
