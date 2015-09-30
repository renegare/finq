describeRoute('submit question', function(browser, app) {
    var expectedMessage = faker.lorem.paragraphs()
        ;

    before(function() {
        app.datastore.questions.get().should.have.length(0);
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
        var questions = app.datastore.questions.get();
        questions.should.have.length(1);
        questions[0].body.should.equal(expectedMessage);
    })
});
