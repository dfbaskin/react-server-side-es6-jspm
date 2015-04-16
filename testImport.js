
var jspm = require('jspm');
jspm.setPackagePath('.');

jspm.import('app/app-server.jsx!').then(function(v) {
    console.log("Imported:", v);
}, function(err) {
    console.log("Error:", err);
});

