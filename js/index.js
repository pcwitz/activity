'use strict';

var cookie = require('../../common/cookie');
var data = require('../../common/data');

var userName = cookie.getByName('MyClaimWebUserName');

if (userName) {
  // logged in
  var pathname = window.location.pathname;
  var path = pathname.substr(10); // remove /claimweb/ from path

  var ignorables = [
    'tools/clmsrchBC.asp',
    'tools/clmsrch.asp',
    'TOCpage.asp',
    ''
  ];

  if (ignorables.indexOf(path) === -1) {
    // our path is not to be ignored
    var params = {
      userName: userName,
      path: path
    };
    var api = 'http://api.ahcsdev.ibx.com/log';
    data.post(api, params);
  } 
}