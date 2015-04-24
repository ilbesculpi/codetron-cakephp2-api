
var RECIPE_PATH = RECIPES_PATH + '/cakephp2-api';
var TEMPLATES_PATH = RECIPE_PATH + '/templates';
var API_PATH = OUTPUT_PATH + '/Plugin/Api';

var fs = require('fs-extra');
var async = require('async');
var burner = require(BASE_PATH + '/burner');

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
            fs.emptyDir(API_PATH, callback);
        },
        function(callback) {
            burner.mkdirs([
                API_PATH,
                API_PATH + '/Config',
                API_PATH + '/Controller',
                API_PATH + '/View',
                API_PATH + '/View/Layouts',
                API_PATH + '/webroot'
            ], callback);
        }
    ], function(error, results) {
        callback(error);
    });
};

var assets = function(json, callback) {
    
    callback();
    
};
