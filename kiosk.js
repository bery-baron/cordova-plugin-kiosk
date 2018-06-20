
var exec = require('cordova/exec');

var KioskPlugin = {
    
    exitKiosk: function () {
        exec(null, null, "KioskPlugin", "exitKiosk", []);
    },
    
    isInKiosk: function (callback) {
        exec(function(out){
            callback(out=="true");
        }, function(error){
            alert("KioskPlugin.isInKiosk failed: "+error);
        }, "KioskPlugin", "isInKiosk", []);
    },

    exitKioskForLogin: function() {
        exec(null, null, "KioskPlugin", "exitForLogin", []);
    }
    
}

module.exports = KioskPlugin;

