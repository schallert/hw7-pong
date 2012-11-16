module.exports = {
  index: function (req, res){
    res.render('index', { title: 'Express', user: req.user });
  },
  client: function (req, res) {
    res.render('client');
  },
  display: function (req, res) {
    res.render('display');
  }
}