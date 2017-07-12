// Our require statements
const functions = require('firebase-functions');

// The function we are exporting
module.exports = functions.https.onRequest((request, response) => {
  response.send(JSON.stringify(request, null, 4));
});
