module.exports = {
  index: function (req, res){
    res.render('index', { user: req.user });
  },
  client: function (req, res) {
    res.render('client', { user: req.user });
  },
  display: function (req, res) {
    res.render('display');
  }
}