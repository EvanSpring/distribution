var express = require('express');
var config = require('./config/index');

var port = process.env.PORT || config.build.port;

var app = express();

var router = express.Router();

router.get('/', function (req, res, next) {
	req.url = '/index.html';
	next();
});

app.use(router);

const appData = require('./ceshi.json');
const home = appData.data.home;
const set = appData.data.set;
const news = appData.data.news;
const phone = appData.data.phone;
const parts = appData.data.parts;
const change = appData.data.change;
const classify = appData.data.classify;
const goodDetail = appData.data.goodData;

var apiRoutes = express.Router();
apiRoutes.get('/home', function (req, res) {
  res.json({
    errno: 0,
    data: home
  })
});
apiRoutes.get('/set', function (req, res) {
  res.json({
    errno: 0,
    data: set
  })
});
apiRoutes.get('/news', function (req, res) {
  res.json({
    errno: 0,
    data: news
  })
});
apiRoutes.get('/phone', function (req, res) {
  res.json({
    errno: 0,
    data: phone
  })
});
apiRoutes.get('/parts', function (req, res) {
  res.json({
    errno: 0,
    data: parts
  })
});
apiRoutes.get('/change', function (req, res) {
  res.json({
    errno: 0,
    data: change
  })
});
apiRoutes.get('/classify', function (req, res) {
  res.json({
    errno: 0,
    data: classify
  })
});
apiRoutes.get('/goodDetail', function (req, res) {
  res.json({
    errno: 0,
    data: goodDetail
  })
});

app.use('/api', apiRoutes);

app.use(express.static('./dist'));

module.exports = app.listen(8082, function (err) {
	if (err) {
		console.log(err);
		return
	}
	console.log('Listening at http://localhost:' + 8082 + '\n')
});