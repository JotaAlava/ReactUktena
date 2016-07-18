/**
 * Created by jalava on 5/11/2016.
 */
var express = require('express'),
  app = express(),
  path = require('path');

app.use(express.static('public'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, '/public', 'index.html'));
});

var port = normalizePort(process.env.PORT || '80');
app.listen(port, function () {
  console.log('Example app listening on port ' + port + '!');
});

/**
 * Normalize a port into a number, string, or false.
 */

function normalizePort(val) {
  var port = parseInt(val, 10);

  if (isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
}