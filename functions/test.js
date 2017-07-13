// Our require statements
const functions = require('firebase-functions');
const prettyBytes = require('pretty-bytes');


// The function we are exporting
module.exports = functions.https.onRequest((request, response) => {
  let responseString = "IP: " + request.ip + ", Query Strings: ";
  Object.keys(request.query).forEach(function(key) {
    responseString += key+ ": " + request.query[key] + ", ";
  });

  let prettyBytesString = '';
  if (request.query.bytes && /^\d+$/.test(request.query.bytes)) {
    prettyBytesString += prettyBytes(parseInt(request.query.bytes, 10));
  }

  response.json({
      responseString: responseString,
      prettyBytes: prettyBytesString
  });
});
