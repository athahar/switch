'use strict';



require(['config', 'jquery', /*, Dependencies */], function (config, $) {

    var app = {
        initialize: function () {
            
            $('input:radio[name="sourceOption"]').change(
		    	function(){
		    		$("#destination-career").fadeIn('slow').toggleClass('hidden');
		    });   

		    $('input:radio[name="destinationOption"]').change(
		    	function(){
		    		$("#getStarted").fadeIn('slow').toggleClass('hidden');
		    });            
            
        }
    };

    app.initialize();

});


