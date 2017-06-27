var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var expresshandlebars = require('express-handlebars');

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));
app.engine('handlebars', expresshandlebars({
  layoutsDir: 'views',
  defaultLayout: 'index'
}));
app.set('view engine', 'handlebars');

app.set('views', __dirname + '/views');
// app.set('view engine', 'ejs');
app.set('view engine', 'handlebars');

app.get('/', function(request, response) {
  response.render('index');
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});

//might need this later
module.exports = app;
