import Point from '@arcgis/core/geometry/Point';
import SimpleMarkerSymbol from '@arcgis/core/symbols/SimpleMarkerSymbol';

export default {

  convertJSONToSMS() {

    const smsJson = {
      "type": "esriSMS",
      "style": "esriSMSSquare",
      "color": [76, 115, 0, 255],
      "size": 8,
      "angle": 0,
      "xoffset": 0,
      "yoffset": 0,
      "outline":
      {
        "color": [152, 230, 0, 255],
        "width": 1
      }
    };
    return SimpleMarkerSymbol.fromJSON(smsJson);
  },

  convertJSONToPoint() {

    const mapPoint = {
      x: -49.97,
      y: 41.73,
      spatialReference: {
        wkid: 4326
      }
    };

    return Point.fromJSON(mapPoint);
  }
}