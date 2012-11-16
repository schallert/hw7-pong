var express = require('express')
  , flash = require('connect-flash')
  , http = require('http')
  , path = require('path')
  , passport = require('passport')
  , myUtil = require('./myUtil.js')

  // Routes
  , routes = require('./routes')
  , user = require('./routes/user');

// Initialize passport with all the shit we need
myUtil.setupPassport(passport);

var app = express();

app.configure(function(){
  app.set('port', process.env.PORT || 3000);
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.favicon());
  app.use(express.logger('dev'));
  app.use(express.cookieParser());
  app.use(express.bodyParser());
  app.use(express.session({ secret: 'keyboard cat' }));
  app.use(flash());
  app.use(express.methodOverride());
  app.use(passport.initialize());
  app.use(passport.session());
  app.use(app.router);
  app.use(express.static(path.join(__dirname, 'public')));
});

app.configure('development', function(){
  app.use(express.errorHandler());
});

app.get('/', routes.index);

// User control
app.get('/login', user.loginGet);
app.post('/login', 
  passport.authenticate('local', { failureRedirect: '/login', failureFlash: true }),
  user.loginPost
);
app.get('/logout', user.logout);

// Fire it up
app.listen(app.get('port'));
console.log("Express server listening on port " + app.get('port'));