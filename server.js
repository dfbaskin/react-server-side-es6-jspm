
var FS = require("q-io/fs");
var express = require('express');
var app = express();

var templateRegex = /<!--\$content\$-->/m;
var templateFile = FS.read("./index.html");

var jspm = require('jspm');
jspm.setPackagePath('.');

app.use("/render", function(req, res) {
    templateFile.then(function(content) {

        jspm
            .import('app/app-server.jsx!')
            .then(function(injectedScript) {

                content = content.replace(templateRegex, injectedScript.default);
                res.setHeader('Content-Type', 'text/html');
                res.end(content);

            }, function(err) {
                res.status(500).send("Error converting template.");
            });
    },
    function() {
        res.status(500).send("Error reading template file.");
    });
});

app.use(express.static('.'));

var server = app.listen(9779, function () {
    console.log('Example app listening at http://localhost:%s', server.address().port);
});
