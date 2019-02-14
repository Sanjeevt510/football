'use strict'

module.exports = function () {

    return {
        SetRouting: function (router) {
            router.get('/', this.indexPage);
            router.get('/login', this.loginPage)
            router.post('/loginstatus', this.loginPagePost)

        },
        indexPage: (req, res) => {
            return res.render('index', { test: 'this is for the testin from the user modulewwww' });
        }, loginPage: (req, res) => {
            return res.render('login', { id: 'this is id', pw: 'this is pws' });
        }, loginPagePost: (req, res, next) => {
            var id = req.body.id;
            var pw = req.body.pw;
            if (id == "test" && pw == "1234") {
                return res.render('loginstatus/loginSuccess',{test:' valid login details entered'});
            }
            else {
                return res.render('loginstatus/loginFail',{test:'in valid login details entered'});
            }
        }
    }

}