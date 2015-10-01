describeRoute('submit question', function(browser, app) {
    var expectedMessage = faker.lorem.paragraphs()
        ;

    before(function() {
        return app.datastore()
            .then(function(models) {
                return models.questions.find();
            })
            .then(function(messages) {
                messages.should.have.length(0);
            });
    });

    before(function() {
        return browser.visit('/')
            ;
    });

    before(function() {
        browser
            .fill('message', expectedMessage)
            ;
        return browser.pressButton('Send!')
    });

    it('should render question', function() {
        browser.assert.url('/thanks');
    });

    it('should have persisted message', function() {
        return app.datastore()
            .then(function(models) {
                return models.questions.find();
            })
            .then(function(messages) {
                messages.should.have.length(1);
            });
    })
});
