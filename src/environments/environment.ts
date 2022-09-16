// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: true,
  // url:'https://employee-details-data-default-rtdb.asia-southeast1.firebasedatabase.app/Employees.json/',
  firebase: {
    projectId: 'employee-details-data',
    appId: '1:129411818023:web:e2eb5060007c659aa8e402',
    databaseURL: 'https://employee-details-data-default-rtdb.asia-southeast1.firebasedatabase.app',
    storageBucket: 'employee-details-data.appspot.com',
    apiKey: 'AIzaSyAD7QQobwJkbbQIQO4ZXZFk8MhBjpkImxQ',
    authDomain: 'employee-details-data.firebaseapp.com',
    messagingSenderId: '129411818023',
    measurementId: 'G-QFGPLSXE6X',
  },
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
