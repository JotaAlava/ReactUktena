var express = require('express');
var router = express.Router();
var mongodb = require('mongodb'),
  mongoClient = mongodb.MongoClient;

/* GET users listing. */
router.get('/track/', function (req, res, next) {
  var userIp = req.connection.remoteAddress;

  mongoClient.connect('mongodb://admin:pwd@ds055565.mongolab.com:55565/independentjournal', function (err, db) {
    db.collection('users').find({ip: userIp}).toArray(function (err, queryResult) {
      res.send(200, queryResult);
    });
  });
});

router.post('/track/', function (req, res, next) {
  var doc = {
    ip: req.connection.remoteAddress,
    url: req.body.articleUrl
  };

  mongoClient.connect('mongodb://admin:pwd@ds055565.mongolab.com:55565/independentjournal', function (err, db) {
    db.collection('users').insert(doc, function (err, result) {
      res.send(201 , result);
    });
  });
});

module.exports = router;
