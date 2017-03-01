//var path = "Users/apiwitt/Desktop/luxsens/GIT/ai-dev/static/dev"

var connect = require('connect');
var serveStatic = require('serve-static');
connect().use(serveStatic(__dirname)).listen(8080, function(){
    console.log('Server running on 8080...');
});


//then go to where html file is then
//node server.js