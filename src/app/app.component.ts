import {
  Component,
  OnInit,
  OnDestroy,
  NgZone
} from '@angular/core';

import WebMap from '@arcgis/core/WebMap';
import MapView from '@arcgis/core/views/MapView';
import config from '@arcgis/core/config.js';
import esriMapUtils from './app.component.maputils';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, OnDestroy {
  private view: any = null;

  constructor(private zone: NgZone) { }

  initializeMap(): Promise<any> {
    const webmap = new WebMap({
      portalItem: {
        id: 'aa1d3f80270146208328cf66d022e09c',
      },
    });

    const view = new MapView({
      container: "viewDiv",
      map: webmap
    });

    this.view = view;
    return this.view.when();
  }

  ngOnInit(): any {

    const simpleMarkerSymbol = esriMapUtils.convertJSONToSMS();
      console.log("simpleMarkerSymbol: ", simpleMarkerSymbol);
    const point = esriMapUtils.convertJSONToPoint();
      console.log("point: ", point);

    // Set this property when using routes in order to resolve the /assets correctly.
    // IMPORTANT: the directory path may be different between your product app and your dev app
    // config.assetsPath = "/assets";
    config.assetsPath = 'assets/';

    this.zone.runOutsideAngular(() => {
      // Initialize MapView and return an instance of MapView
      this.initializeMap().then(() => {
        // The map has been initialized
        this.zone.run(() => {
          console.log('mapView ready: ');
        });
      });

    });
  }

  ngOnDestroy(): void {
    if (this.view) {
      // destroy the map view
      this.view.destroy();
    }
  }
}
