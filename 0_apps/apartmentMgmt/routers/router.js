var express = require('express');
var router = express.Router();


//acessing root should request users to use the /aptmgmt/api instead
/*
router.get('/',function(request,response){	
 response.send('Welcome to Apartment Management App.' +'<br>'+'To get list of APIs, use path /aptmgmt/api'+'<br>'+'To get to the application home page use path /aptmgmt');
});


router.get('/aptmgmt',function(request,response){	
 response.redirect(__dirname+'/public/views/home.html');
});

router.get('/aptmgmt/login',function(request,response){	
 response.redirect(__dirname+'/public/views/login.html');
});*/

router.get('/aptmgmt',function(request,response){	

var path = require('path');
response.sendFile(path.resolve(__dirname + '/../public/'+'index.html'));

});



router.use(require('../api/user.js'));
router.use(require('../api/building.js'));
router.use(require('../api/room.js'));
router.use(require('../api/masterdata.js'));

module.exports = router;