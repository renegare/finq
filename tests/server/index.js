require('../../src');

var server,
    Browser = require('zombie')
    ;

Browser.localhost('example.com', 3000);

global.faker = require('faker');

var app = src('./server')
    ;

global.describeRoute = function describeRoute(description, cb) {
    return describe(description, function() {

        before(function() {
            server = app.listen(3000);
        });

        cb.apply(this, [new Browser, app]);

        after(function() {
            server.close();
        });
    });
};
