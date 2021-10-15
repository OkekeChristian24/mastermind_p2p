const registerService = require("./../services/registerService");
const validator = require("express-validator");


const createNewUser = async (req, res) => {
    
    //validate required fields
    const errorsArr = [];
    const validationErrors = validator.validationResult(req);
    if (!validationErrors.isEmpty()) {
        let errors = Object.values(validationErrors.mapped());
        errors.forEach((item) => {
            errorsArr.push(item.msg);
        });
        req.flash("errors", errorsArr);
        return res.redirect("/auth/register");
    }

    //create a new user
    const newUser = {
        email: req.body.email,
        password: req.body.password
    };
    try {
        await registerService.createNewUser(newUser);
        return res.redirect("/auth/login");
    } catch (err) {
        req.flash("errors", err);
        return res.redirect("/auth/register");
    }
};


module.exports = {
    createNewUser
};
