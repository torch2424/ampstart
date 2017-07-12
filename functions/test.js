// Our require statements
const functions = require('firebase-functions');

// The function we are exporting
module.exports = functions.https.onRequest((request, response) => {
  const responseString = "IP: " + request.ip + ", Query Strings: " + JSON.stringify(request.query, null, 4);
  response.send(responseString);
});
