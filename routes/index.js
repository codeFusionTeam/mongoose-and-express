var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/users', function(req, res, next) {
  mongoose.model('users').find(function(err, users) {
      if (users) {
          res.send(users);
      } else {
          res.send('No users found!');
      }
  });
});

router.get('/users/:user', function(req, res) {
  mongoose.model('users').findOne({name: req.params.user}, function(err, user) {
      
      res.send(user.name || 'User.name is not defined' );
  });
});

module.exports = router;
