let getHomePage = (req, res) => {
    return res.render('homepage.ejs');
}

let getAboutPage = (req, res) => {
    return res.render('test/about.ejs');
}
// obj: {
// key: '',
// value: ''
// }

module.exports = {
    getHomePage: getHomePage,
    getAboutPage:getAboutPage,
}
