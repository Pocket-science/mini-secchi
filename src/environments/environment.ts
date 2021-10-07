// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.


/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
export const environment = {
 production: false,
 firebase: {
   apiKey: "AIzaSyCySKfEhz2ANjl_182e4Nz0r0tf7WpCU18",
   authDomain: "mobis-310107.firebaseapp.com",
   databaseURL: "https://mobis-310107-default-rtdb.europe-west1.firebasedatabase.app",
   projectId: "mobis-310107",
   storageBucket: "mobis-310107.appspot.com",
   messagingSenderId: "828857616727"
 },
 
  appShellConfig: {
    debug: false,
    networkDelay: 0
  }

};