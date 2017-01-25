var path = require('path');
var express = require('express');
var nunjucks = require('nunjucks');
var bodyParser = require('body-parser');

var app = express();
var routes = require('./app/routes.js');

app.set('view engine', 'html');

var appViews = [
    path.join(__dirname, '/app/views/'),
    path.join(__dirname, '/govuk_modules/govuk_template/layouts/')
];

var nunjucksAppEnv = nunjucks.configure(appViews, {
    autoescape: true,
    express: app,
    noCache: true,
    watch: true
});

app.set('port', process.env.PORT || 3000);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/public', express.static(path.join(__dirname, '/public')));
app.use('/public', express.static(path.join(__dirname, '/govuk_modules/govuk_template/assets')));
app.use('/public', express.static(path.join(__dirname, '/govuk_modules/govuk_frontend_toolkit')));
app.use('/public/images/icons', express.static(path.join(__dirname, '/govuk_modules/govuk_frontend_toolkit/images')));

// Variable used in paths inside the govuk template files
app.locals.asset_path = '/public/';

app.use('/', routes);

app.listen(app.get('port'), function() {
    console.log('Express server listening on port ' + app.get('port'));
});

module.exports = app;
