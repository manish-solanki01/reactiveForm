// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const baseUrl = 'http://localhost:5000';

export const environment = {
  production: false,
  encryption: false,
  baseUrl,
  userApi: `${baseUrl}/user`,
  myAccountApi: `${baseUrl}/myAccount`,
  adminApi: {
    products: `${baseUrl}/admin/products`,
    categories: `${baseUrl}/admin/categories`
  },
  apiKey : 'T^-jdUnRg9+f&G?5Z!y,)I Z(,B^_]LNQu+Jc<EeMxi9j9I~1+kD.keMGJ^6pxjl'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
