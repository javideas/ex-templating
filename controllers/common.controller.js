
// Iteration 1: render home view
module.exports.home = (req, res) => {
    res.render('home');
};

module.exports.tweets = (req, res) => {
    res.render('tweets');
};

module.exports.config = (req, res) => {
    res.render('config');
};