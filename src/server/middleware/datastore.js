module.exports = function(resources, app) {
    app.datastore = resources.reduce(function(prev, next) {
        prev[next] = new Resource(next, app.get('db.credentials'));
        return prev;
    }, {});

    return function(req, res, next) {
        req.datastore = app.datastore;
        next();
    };
}

function Resource(name) {
    this.name = name;
    this.datastore = new DatastoreAdaptor(credentials);
}

Resource.prototype.get = function(id, options) {
    return id? this.datastore.get(id) : this.datastore.getAll(options || {});
}

function DatastoreAdaptor(credentials) {
    switch(credentials.type) {
        
    }
}
