
var fs = require('fs-extra');
var async = require('async');
var burner = require('../../burner');

var pluginPath = './output/Plugin/Api';

module.exports = {
    
    cook: function(config, json, callback) {
        
        console.info('[INFO] cakephp2-api()');
        
        async.series([
            function(callback) {
                console.log('[DEBUG] initializing Api Plugin...');
                init(json, callback);
            },
            function(callback) {
                console.log('[DEBUG] copying assets...');
                assets(json, callback);
            }
        ], function(error, results) {
            callback(error);
        });
        
    }
    
};

var init = function(json, callback) {
        
    async.series([
        function(callback) {
            fs.emptyDir(pluginPath, callback);
        },
        function(callback) {
            burner.mkdirs([
                pluginPath,
                pluginPath + '/Config',
                pluginPath + '/Controller',
                pluginPath + '/View',
                pluginPath + '/View/Layouts',
                pluginPath + '/webroot'
            ], callback);
        }
    ], function(error, results) {
        callback(error);
    });
};

var assets = function(json, callback) {
    
    callback();
    
};
