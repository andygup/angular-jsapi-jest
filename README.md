# angular-jsapi-jest

This is a basic proof-of-concept for using Jest with the ArcGIS API for JavaScript (JS API) and Angular 11+. It demonstrates using static JS API methods and doesn't provide any mocks for services.

You are in the right place if you ran into `Cannot use import statement outside a module` errors when trying run tests against the JS API.

### Things to note about the configuration

Here's all the modifications I made to the default project.

0. I installed Jest and jest-preset-angular.

1. Added a new file named `babel.config.js`. Then I added this to the file:
 
```js
module.exports = function (api) {
  api.cache(true);

  const presets = ['@babel/preset-env'];
  const plugins = ['@babel/transform-runtime'];

  return {
    presets,
    plugins,
  };
};
```
 
2. Modified `jest.config.js` to include `babel-jest`, and `ts-test` doesn't include `.js` files. This allowed jest to parse the JS API ES modules:
 
```js
 transform: {
   '^.+\\.(ts|html)$': 'ts-jest',
   '^.+\\.js$': 'babel-jest' 
 }, 
```

3. Added a new file `setupJest.js`.

4. Added the following to `ts.config.spec.json`:

```js
    "esModuleInterop": true,
    "emitDecoratorMetadata": true    
```

5. Added the following to `tsconfig.json`

```js
    "types": [
      "jest"
    ],   
```

6. Deleted `test.ts`.

7. Removed `test.ts` from `tsconfig.spec.json`

```js
  "files": [
    "src/polyfills.ts"
  ],
```

6. Removed all the various Karma and Jasmine bits I could find from the default Angular CLI install.

### Install

Run `npm install`.

### Dev build

After install, make sure the map displays with no errors by running `ng start --open`.

### Test

Shut down the dev server with `Control C` and then run `npm test`. The tests should complete without any failures:

```json

PASS  src/app/app.component.spec.ts

Test Suites: 2 passed, 2 total
Tests:       3 passed, 3 total
Snapshots:   0 total
Time:        3.723 s
Ran all test suites.

```

### Licensing

ArcGIS API for JavaScript, Copyright 2020 Esri

Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at

http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.

A copy of the license is available in the repository's LICENSE file.
