var express = require('express');
var router = express.Router();


//load the API routes

router.use(require('../api/user.js'));
router.use(require('../api/building.js'));
router.use(require('../api/room.js'));
router.use(require('../api/masterdata.js'));

//handle access to root of application
router.get('/aptmgmt',function(request,response){	

var path = require('path');
response.sendFile(path.resolve(__dirname + '/../public/'+'index.html'));

});


//keep the below portion to handle pattern in the URL to redirect to index.html 
//once angular gets loaded it knows how to redirect it to correct URL
router.get('/aptmgmt/*',function(request,response){	

var path = require('path');
response.sendFile(path.resolve(__dirname + '/../public/'+'index.html'));

});

module.exports = router;