var express = require('express')
var sampleController = require('./controllers/sample');

var app = express()
app.get('/', sampleController.webhome);
app.get('/api', sampleController.apihome);

var server = app.listen(3000, function () {
    var host = server.address().address
    var port = server.address().port
    console.debug('Example app listening at http://%s:%s', host, port)
})

module.exports = app;
