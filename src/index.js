let {makeHTTPDriver} = require(`./cycle-http-driver`)

let CycleHTTPDriver = {
  /**
   * HTTP Driver factory.
   *
   * This is a function which, when called, returns a HTTP Driver for Cycle.js
   * apps. The driver is also a function, and it takes an Observable of requests
   * as input, and generates a metastream of responses.
   *
   * **Requests**. The Observable of requests should emit either strings or
   * objects. If the Observable emits strings, those should be the URL of the
   * remote resource over HTTP. If the Observable emits objects, these should be
   * instructions how superagent should execute the request. These objects
   * follow a structure similar to superagent's request API itself.
   * `request` object properties:
   *
   * - `url` *(String)*: the remote resource path. **required**
   * - `method` *(String)*: HTTP Method for the request (GET, POST, PUT, etc).
   * - `query` *(Object)*: an object with the payload for `GET` or `POST`.
   * - `send` *(Object)*: an object with the payload for `POST`.
   * - `headers` *(Object)*: object specifying HTTP headers.
   * - `accept` *(String)*: the Accept header.
   * - `type` *(String)*: a short-hand for setting Content-Type.
   * - `user` *(String)*: username for authentication.
   * - `password` *(String)*: password for authentication.
   * - `field` *(Object)*: object where key/values are Form fields.
   * - `progress` *(Boolean)*: whether or not to detect and emit progress events
   *   on the response Observable.
   * - `attach` *(Array)*: array of objects, where each object specifies `name`,
   * `path`, and `filename` of a resource to upload.
   * - `withCredentials` *(Boolean)*: enables the ability to send cookies from
   * the origin.
   * - `redirects` *(Number)*: number of redirects to follow.
   * - `eager` *(Boolean)*: whether or not to execute the request regardless of
   *   usage of its corresponding response. By default the eager setting of the
   *   driver is used (whose default is `false`, i.e. the request is lazy).
   *   Explicitely setting eager in the request always overrides the driver
   *   setting. Main use case is: set this option to `true` if you send POST
   *   requests and you are not interested in its response.
   *
   * **Responses**. A metastream is an Observable of Observables. The response
   * metastream emits Observables of responses. These Observables of responses
   * have a `request` field attached to them (to the Observable object itself)
   * indicating which request (from the driver input) generated this response
   * Observable. The response Observables themselves emit the response object
   * received through superagent.
   *
   * @param {Object} options an object with settings options that apply globally
   * for all requests processed by the returned HTTP Driver function. The
   * options are:
   * - `eager` *(Boolean)*: execute the HTTP eagerly, even if its
   *   response Observable is not subscribed to. Default: **false**.
   *   Can be overridden in the request.
   * @return {Function} the HTTP Driver function
   * @function makeHTTPDriver
   */
  makeHTTPDriver,
}

module.exports = CycleHTTPDriver
