exports.webhome = function(req, res) {
    res.send('Hello World!');
}

exports.apihome = function(req, res) {
    res.json({msg: 'api hello!'});
}
