import { TestBed } from "@angular/core/testing";
import { ElementRef } from "@angular/core";
import { AppComponent } from "./app.component";
import MapView from "@arcgis/core/views/MapView";
import WebMap from "@arcgis/core/WebMap";
import MapService from "./map.service";

describe("AppComponent", () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppComponent],
    }).compileComponents();
  });

  it("should create the app", () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it("verify map component init", () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    expect(WebMap).toHaveBeenCalledTimes(1);
    expect(MapView).toHaveBeenCalledTimes(1);
  });

  it("verify map service init", async () => {
    const container = document.createElement("div");
    let elemRef: ElementRef = new ElementRef(container);
    let mapService = new MapService(elemRef);
    const map = await mapService.initializeMap();
    expect(map).toEqual({ data: "test" });
    expect(WebMap).toHaveBeenCalledTimes(2); // This will be "2" becaue of the previous test
    expect(MapView).toHaveBeenCalledTimes(2); // Ditto!
  });
});
