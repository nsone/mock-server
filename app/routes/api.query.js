(function() {
  'use strict';

  // MODULES //

  var params = require( './../params.js' );


  // ONREQUEST //

  /**
  * FUNCTION: onRequest( request, response )
  * Query request handler.
  *
  * @param {Object} request - HTTP request object
  * @param {Object} response - HTTP response object
  */
  function onRequest( request, response ) {
    console.log('jab query hit at least', request.query);
    return params.queryHandler(request, response);
  } // end FUNCTION onRequest()


  // EXPORTS //

  module.exports = onRequest;

})();
