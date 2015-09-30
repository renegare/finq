var app = require('express')()
    ;

app.use(require('./middleware/datastore')(['questions']));

app.get('/', function(req, res) {
    res.send('<form method="post"><textarea name="message"></textarea> <button type="submit">Send!</button></form>');
});

app.post('/', function(req, res) {
    res.redirect('/thanks');
});

app.get('/thanks', function(req, res) {
    res.send('Thanks mother fuckers!?');
});

module.exports = app;
