const { body } = require("express-validator");

const validateCreate = [
    body("crypto_id", "Please enter a crypto asset type")
     .exists({checkFalsy: true})
     .not().isEmpty()
     .custom((value, { req }) => {
        if (!(value > 0 && Number.isInteger(value))) {
            throw new Error('Invalid crypto asset id');
        } 
      }
    ),
    body("fiat_id", "Please enter a fiat currency type")
     .exists({checkFalsy: true})
     .not().isEmpty()
     .custom((value, { req }) => {
        if (!(value > 0 && Number.isInteger(value))) {
            throw new Error('Invalid fiat currency id');
        } 
      }
    ),
    body("advert_type", "Please enter advert type")
     .exists({checkFalsy: true})
     .not().isEmpty()
     .custom((value, { req }) => {
        if (!(value > 0 && Number.isInteger(value))) {
            throw new Error('Invalid advert type');
        } 
      }
    ),
    body("price", "Please enter price")
     .exists({checkFalsy: true})
     .not().isEmpty()
     .custom((value, { req }) => {
        if (!(value > 0 && Number.isInteger(value))) {
            throw new Error('Invalid price type');
        } 
      }
    ),
    body("online", "Please enter your status")
     .exists({checkFalsy: true})
     .not().isEmpty()
     .custom((value, { req }) => {
        if (!(value > 0 && Number.isInteger(value))) {
            throw new Error('Invalid status type');
        } 
      }
    ),
    body("fiat_min_amt")
     .not().isEmpty()
     .trim()
     .escape()
     .custom((value, { req }) => {

        if(!(typeof myVar === 'string' || myVar instanceof String)){
            throw new Error('Invalid minimum amount');
        }
         if(isNaN(value)){
            throw new Error('Invalid minimum amount');
         }
     }),
     body("fiat_max_amt")
     .not().isEmpty()
     .trim()
     .escape()
     .custom((value, { req }) => {

        if(!(typeof myVar === 'string' || myVar instanceof String)){
            throw new Error('Invalid maximum amount');
        }
         if(isNaN(value)){
            throw new Error('Invalid maximum amount');
         }
     }),
     body("terms")
     .trim()
     .escape()
     .custom((value, { req }) => {

        if(!(typeof myVar === 'string' || myVar instanceof String)){
            throw new Error('Invalid terms value');
        }
         
     })


];


const validateEdit = [
    body("crypto_id", "Please enter a crypto asset type")
     .exists({checkFalsy: true})
     .not().isEmpty()
     .custom((value, { req }) => {
        if (!(value > 0 && Number.isInteger(value))) {
            throw new Error('Invalid crypto asset id');
        } 
      }
    ),
    body("fiat_id", "Please enter a fiat currency type")
     .exists({checkFalsy: true})
     .not().isEmpty()
     .custom((value, { req }) => {
        if (!(value > 0 && Number.isInteger(value))) {
            throw new Error('Invalid fiat currency id');
        } 
      }
    ),
    body("advert_type", "Please enter advert type")
     .exists({checkFalsy: true})
     .not().isEmpty()
     .custom((value, { req }) => {
        if (!(value > 0 && Number.isInteger(value))) {
            throw new Error('Invalid advert type');
        } 
      }
    ),
    body("price", "Please enter price")
     .exists({checkFalsy: true})
     .not().isEmpty()
     .custom((value, { req }) => {
        if (!(value > 0 && Number.isInteger(value))) {
            throw new Error('Invalid price type');
        } 
      }
    ),
    body("online", "Please enter your status")
     .exists({checkFalsy: true})
     .not().isEmpty()
     .custom((value, { req }) => {
        if (!(value > 0 && Number.isInteger(value))) {
            throw new Error('Invalid status type');
        } 
      }
    ),
    body("fiat_min_amt")
     .not().isEmpty()
     .trim()
     .escape()
     .custom((value, { req }) => {

        if(!(typeof myVar === 'string' || myVar instanceof String)){
            throw new Error('Invalid minimum amount');
        }
         if(isNaN(value)){
            throw new Error('Invalid minimum amount');
         }
     }),
     body("fiat_max_amt")
     .not().isEmpty()
     .trim()
     .escape()
     .custom((value, { req }) => {

        if(!(typeof myVar === 'string' || myVar instanceof String)){
            throw new Error('Invalid maximum amount');
        }
         if(isNaN(value)){
            throw new Error('Invalid maximum amount');
         }
     }),
     body("terms")
     .trim()
     .escape()
     .custom((value, { req }) => {

        if(!(typeof myVar === 'string' || myVar instanceof String)){
            throw new Error('Invalid terms value');
        }
         
     })


];


module.exports = {
    validateCreate,
    validateEdit
};