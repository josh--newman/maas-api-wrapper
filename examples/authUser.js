var MaaS = require('./../index.js');
var keys = require('./keys.js');

var maas = new MaaS(keys);

// var str = maas._encrypt('thisisateststring');
// console.log(str);

maas.authUser('demo2@example.com', 'demotime', function(err, userData) {
  if(err) return console.log(err);

  console.log(userData);
});
