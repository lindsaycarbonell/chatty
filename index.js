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

app.get('/', function(req, res) {
  res.render('index');
});

app.get('/submit', function(req, res){
  var index_zero = req.originalUrl.lastIndexOf("?");
  var question = req.originalUrl.substring(index_zero+10, req.originalUrl.length);
  console.log(res.body);
})

// app.get('/?=:id', function(request, response){
//   console.log(id);
// });

app.post('submit-question', function(request, response){});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});

//might need this later
module.exports = app;
