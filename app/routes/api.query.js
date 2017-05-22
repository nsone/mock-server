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
    return params.queryHander(request, response);
  } // end FUNCTION onRequest()


  // EXPORTS //

  module.exports = onRequest;

})();
