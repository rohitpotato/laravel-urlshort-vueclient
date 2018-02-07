var express = require('express');
var serveStatic = require('serve-static');
var axios = require('axios');

app = express();
app.use(serveStatic(__dirname));

var port = process.env.PORT || 5000;
var apiUrl = 'https://shielded-cove-84573.herokuapp.com' || 'http://fresher.app:8000';

app.listen(port);

app.get('/:code', function (req, res, next) {
  axios.get(apiUrl + '?code=' + req.params.code).then(function (response) {
    res.redirect(301, response.data.data.original_url);
  }).catch(function (error) {
    next();
  });
}, function (req, res) {
  res.sendFile(__dirname + '/index.html');
});

app.get('*', function (req, res) {
  res.sendFile(__dirname + '/index.html');
});
