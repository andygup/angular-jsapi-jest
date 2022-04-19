import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  OnDestroy,
} from '@angular/core';

// import WebMap from '@arcgis/core/WebMap';
// import MapView from '@arcgis/core/views/MapView';
import MapService  from './map.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, OnDestroy {
  public view: any = null;
  private mapService: any;
  // The <div> where we will place the map
  @ViewChild('mapViewNode', { static: true }) public mapViewEl!: ElementRef;

  ngOnInit(): any {
    // Initialize MapView and return an instance of MapView
    this.mapService = new MapService(this.mapViewEl);    
    this.mapService.initializeMap().then(() => {
      console.log("Map is loaded");
    });
  }

  ngOnDestroy(): void {
    if (this.view) {
      // destroy the map view
      this.view.destroy();
    }
  }
}
