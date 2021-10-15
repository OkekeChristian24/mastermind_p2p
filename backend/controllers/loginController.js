const validator = require("express-validator");
const loginService = require("../services/loginService");


const handleLogin = async (req, res) => {
    let errorsArr = [];
    let validationErrors = validator.validationResult(req);
    if (!validationErrors.isEmpty()) {
        let errors = Object.values(validationErrors.mapped());
        errors.forEach((item) => {
            errorsArr.push(item.msg);
        });
        req.flash("errors", errorsArr);
        return res.redirect("/auth/login");
    }

    try {
        await loginService.handleLogin(req.body.email, req.body.password);
        return res.redirect("/");
    } catch (err) {
        req.flash("errors", err);
        return res.redirect("/auth/login");
    }
};


const postLogOut = (req, res) => {
    req.session.destroy(function(err) {
        return res.redirect("/auth/login");
    });
};

module.exports = {
    handleLogin: handleLogin,
    postLogOut: postLogOut
};
