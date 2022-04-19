# angular-jsapi-jest

This is a basic proof-of-concept for using Jest with the ArcGIS API for JavaScript (JS API) ES modules and Angular 13+. It is based on the Angular CLI sample app at [github.com/jsapi-resources/esm-samples](https://github.com/Esri/jsapi-resources/tree/master/esm-samples/jsapi-angular-cli). It demonstrates using static JS API methods and doesn't provide any mocks for services. The JS API library is available as ES modules via `npm install @arcgis/core`.

You are in the right place if you ran into `Cannot use import statement outside a module` errors when trying run jest tests against the JS API.

### Things to note about the configuration

Here's all the modifications I made to the Angular CLI sample. 

0. I installed Jest and jest-preset-angular.
 
1. Added jest config info the `package.json`, The ArcGIS API requires several additions to the `transformIgnorePatterns`:
 
```js
  "jest": {
    "preset": "jest-preset-angular",
    "transformIgnorePatterns": [
      "node_modules/(?!(@angular|@arcgis|@esri|@stencil|@popperjs)/)"
    ],
    "setupFilesAfterEnv": [
      "<rootDir>/src/setupJest.ts"
    ]
  }
```

2. Added a new file `setupJest.ts` and included mocks, as well as a mock to avoid `ResizeObserver` errors:

```js
window.ResizeObserver =
    window.ResizeObserver ||
    jest.fn().mockImplementation(() => ({
        disconnect: jest.fn(),
        observe: jest.fn(),
        unobserve: jest.fn(),
    }));
```

3. Added the following to `ts.config.spec.json`:

```js
   "types": [
      "jest"
    ]  
```

4. Added the following to `tsconfig.json`

```js
  "compilerOptions": {
    "esModuleInterop": true,
  }
 
```

5. Deleted `test.ts`.

6. Removed `test.ts` from `tsconfig.spec.json`

```js
  "files": [
    "src/polyfills.ts"
  ],
```

7. Removed all the various Karma and Jasmine bits I could find from the default Angular CLI install.

### Install

Run `npm install`.

### Dev build

After install, make sure the map displays with no errors by running `ng serve --open`.

### Test

Shut down the dev server with `Control C` and then run `npm test`. The tests should complete without any failures:

```json

 PASS  src/app/app.component.spec.ts
  AppComponent
    ✓ should create the app (38 ms)
    ✓ verify map component init (114 ms)
    ✓ verify map service init (3 ms)

Test Suites: 1 passed, 1 total
Tests:       3 passed, 3 total
Snapshots:   0 total
Time:        4.552 s, estimated 10 s
Ran all test suites.

```

### Licensing

ArcGIS API for JavaScript, Copyright 2021 Esri

Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at

http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.

A copy of the license is available in the repository's LICENSE file.
