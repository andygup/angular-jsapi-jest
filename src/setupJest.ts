import "zone.js/fesm2015/zone-testing-bundle.min.js";
import { getTestBed } from "@angular/core/testing";
import {
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting,
} from "@angular/platform-browser-dynamic/testing";

getTestBed().initTestEnvironment(
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting()
);

// Work-around for ResizeObserver errors
window.ResizeObserver =
  window.ResizeObserver ||
  jest.fn().mockImplementation(() => ({
    disconnect: jest.fn(),
    observe: jest.fn(),
    unobserve: jest.fn(),
  }));

// Mocks
jest.mock("@arcgis/core/WebMap");
jest.mock("@arcgis/core/views/MapView", () => {
  return jest.fn().mockImplementation(() => {
    return {
      when: jest.fn(
        () =>
          new Promise((resolve) => {
            resolve({ data: "test" });
          })
      ),
      on: jest.fn(),
      destroy: jest.fn(),
    };
  });
});
