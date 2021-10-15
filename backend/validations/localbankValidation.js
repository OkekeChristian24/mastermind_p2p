const { body } = require("express-validator");

const validateCreate = [

    body("user_name")
    .not().isEmpty()
    .trim()
    .escape()
    .custom((value, { req }) => {

       if(!(typeof myVar === 'string' || myVar instanceof String)){
           throw new Error('Invalid name');
       }
        if(isNaN(value)){
           throw new Error('Invalid name');
        }
    }),
    body("account_number", "Please enter a valid account number!")
     .exists({checkFalsy: true})
     .not().isEmpty()
     .custom((value, { req }) => {
        if (!(value > 0 && Number.isInteger(value))) {
            throw new Error('Invalid account number');
        } 
      }
    ),
    body("bank_name")
    .not().isEmpty()
    .trim()
    .escape()
    .custom((value, { req }) => {

       if(!(typeof myVar === 'string' || myVar instanceof String)){
           throw new Error('Invalid bank name');
       }
        if(isNaN(value)){
           throw new Error('Invalid bank name');
        }
    }),
];


const validateUpdate = [
    body("user_name")
    .not().isEmpty()
    .trim()
    .escape()
    .custom((value, { req }) => {

       if(!(typeof myVar === 'string' || myVar instanceof String)){
           throw new Error('Invalid name');
       }
        if(isNaN(value)){
           throw new Error('Invalid name');
        }
    }),
    body("account_number", "Please enter a valid account number!")
     .exists({checkFalsy: true})
     .not().isEmpty()
     .custom((value, { req }) => {
        if (!(value > 0 && Number.isInteger(value))) {
            throw new Error('Invalid account number');
        } 
      }
    ),
    body("bank_name")
    .not().isEmpty()
    .trim()
    .escape()
    .custom((value, { req }) => {

       if(!(typeof myVar === 'string' || myVar instanceof String)){
           throw new Error('Invalid bank name');
       }
        if(isNaN(value)){
           throw new Error('Invalid bank name');
        }
    }),
];


module.exports = {
    validateCreate,
    validateUpdate
};