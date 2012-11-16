module.exports = {
  loginGet: function (req, res){
    res.render('login', { user: req.user, message: req.flash('error') });
  },
  loginPost: function (req, res) {
    res.redirect('/client');
  },
  logout: function (req, res) {
    req.logout();
    res.redirect('/');
  }
}