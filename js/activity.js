var express = require('express');
var fs = require('fs');
var moment = require('moment-timezone');

var activityRouter = express.Router();

activityRouter.route('/')
  .post(function (req, res) {
    if (!req.body) {
      return res.sendStatus(400);
    } else {
      if (req.body.userName) {
        var now = moment().tz('America/New_York').format('M/D/YYYY h:m:s A');
        var userName = req.body.userName.trim();
        var path = req.body.path;
        var log = now + ',' + userName + ',' + path + '\n';
        fs.appendFile('../../wwwroot/claimweb/logs/activity.txt', log, function(err) {
          if (err) {
            res.send(err);
          } else {
            res.send(req.body);
          }
        });
      }
    }
  });
  
module.exports = activityRouter;