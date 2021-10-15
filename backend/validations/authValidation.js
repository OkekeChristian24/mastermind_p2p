const { body } = require("express-validator");

const validateRegister = [
    body("email", "Invalid email")
     .exists({checkFalsy: true}).withMessage("Please enter an email")
     .isEmail()
     .normalizeEmail(),

     body("password", "Invalid password. Password must be at least 4 chars long")
     .exists({checkFalsy: true}).withMessage("Please enter a password")
     .isLength({ min: 4 }),

     body("passwordConfirmation")
     .exists({checkFalsy: true}).withMessage("Please confirm your password")
     .custom((value, { req }) => {
         if (value !== req.body.password) {
            throw new Error('Password confirmation is incorrect');
         }
     })
];

const validateLogin = [
    body("email", "Invalid email")
     .exists({checkFalsy: true}).withMessage("Please enter an email")
     .isEmail().trim(),

     body("password", "Please enter a password")
     .not().isEmpty()
];

module.exports = {
    validateRegister: validateRegister,
    validateLogin: validateLogin
};
