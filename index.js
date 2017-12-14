var express = require('express');
//var basicAuth = require('express-basic-auth');
var app = express();

//app.use(basicAuth({
//    users: { 'admin': 'admin' }
//}))

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});

app.get('/hello', function(request, response) {
    var name = request.query.name;
    response.send('Hello, ' + name);
});
