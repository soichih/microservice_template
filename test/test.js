var should = require('should');
var supertest = require('supertest');
var app = require('../app.js');

var request = supertest(app);

describe('GET /api', function() {
    it('should return 200 OK', function(done) {
        request.get('/api').expect(200, done);
    });
});

