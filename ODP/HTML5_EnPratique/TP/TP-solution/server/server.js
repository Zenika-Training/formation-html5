var connect = require('connect');
var app = connect()
    .use('/', connect.static('../'))
    .listen(8081);
