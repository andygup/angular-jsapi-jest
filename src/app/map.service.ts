import { ElementRef } from "@angular/core";
import WebMap from '@arcgis/core/WebMap';
import MapView from '@arcgis/core/views/MapView';

export default class MapService {
  public mapViewEl: ElementRef<any>;
  public view: any = null;

  constructor(mapViewEl:ElementRef) {
    this.mapViewEl = mapViewEl;
  }

  initializeMap(): Promise<any> {
    let container = this.mapViewEl.nativeElement;

    const webmap = new WebMap({
      portalItem: {
        id: 'aa1d3f80270146208328cf66d022e09c',
      },
    });

    this.view = new MapView({
      container,
      map: webmap
    });

    return this.view.when();
  }

}