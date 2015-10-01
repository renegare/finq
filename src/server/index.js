var app = require('express')()
    ;

var Waterline = require('waterline');
var memoryAdapter = require('sails-memory');

app.datastore = (function() {
    var datastore = {}
    ;

    var orm = new Waterline();

    orm.loadCollection(Waterline.Collection.extend({
        identity: 'questions',
        connection: 'mudi',
        attributes: {
            message: {
                type: 'string',
                required: true
            }
        }
    }));

    var promise = new Promise(function(resolve, reject) {
        orm.initialize({
            connections: { mudi: {adapter: 'memory'}},
            adapters: {
                memory: memoryAdapter
            }
        }, function(err, models) {
            if(err) return reject(err);
            resolve(models.collections);
        })
    });

    return function() { return promise; };
})();

app.get('/', function(req, res) {
    res.send('<form method="post"><textarea name="message"></textarea> <button type="submit">Send!</button></form>');
});

app.post('/', function(req, res) {
    req.app.datastore().then(function(models) {
        models.questions.create({message: 'mudi was here!?'})
            .then(function() {
                res.redirect('/thanks');
            })
            .catch(function() {
                res.status(400)
                    .send('WTH!?')
                    ;
            });
    });
});

app.get('/thanks', function(req, res) {
    res.send('<div id="confirmed-submission">Thanks</div>');
});

module.exports = app;
