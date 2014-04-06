'use strict';


var GetstartedModel = require('../models/getStarted');


module.exports = function (app) {

    var model = new GetstartedModel();


    app.get('/getstarted', function (req, res) {
        
        res.render('getstarted', model);
        
    });

};
