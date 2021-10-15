const { body } = require("express-validator");

const validateCreate = [
    body("creator_id", "Please enter a creator detail")
    .exists({checkFalsy: true})
    .not().isEmpty()
    .custom((value, { req }) => {
       if (!(value > 0 && Number.isInteger(value))) {
           throw new Error('Invalid creator id');
       } 
     }
   ),
    body("crypto_id", "Please enter a crypto asset type")
     .exists({checkFalsy: true})
     .not().isEmpty()
     .custom((value, { req }) => {
        if (!(value > 0 && Number.isInteger(value))) {
            throw new Error('Invalid crypto asset id');
        } 
      }
    ),
    body("seller_id", "Please enter seller info")
    .exists({checkFalsy: true})
    .not().isEmpty()
    .custom((value, { req }) => {
       if (!(value > 0 && Number.isInteger(value))) {
           throw new Error('Invalid seller id');
       } 
     }
   ),
    body("buyer_id", "Please enter correct buyer details")
   .exists({checkFalsy: true})
   .not().isEmpty()
   .custom((value, { req }) => {
      if (!(value > 0 && Number.isInteger(value))) {
          throw new Error('Invalid buyer');
      } 
    }
  ),

    body("receiving_wallet")
     .not().isEmpty()
     .trim()
     .escape()
     .custom((value, { req }) => {

        if(!(typeof myVar === 'string' || myVar instanceof String)){
            throw new Error('Invalid wallet type');
        }
         if(isNaN(value)){
            throw new Error('Wallet can\'t be empty');
         }
     }),
    body("fiat_amt", "Please enter amount")
     .exists({checkFalsy: true})
     .not().isEmpty()
     .custom((value, { req }) => {
        if (!(value > 0 && Number.isInteger(value))) {
            throw new Error('Invalid amount type');
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
    body("ads_id", "Please enter ads type")
    .exists({checkFalsy: true})
    .not().isEmpty()
    .custom((value, { req }) => {
       if (!(value > 0 && Number.isInteger(value))) {
           throw new Error('Invalid advert type');
       } 
     }
   ),
    
    body("closed", "Please enter your status")
     .exists({checkFalsy: true})
     .not().isEmpty()
     .custom((value, { req }) => {
        if (!(value == 0 || value == 1 && Number.isInteger(value))) {
            throw new Error('Invalid status type');
        } 
      }
    ),
    body("fee", "Enter fee")
    .exists({checkFalsy: true})
    .not().isEmpty()
    .custom((value, { req }) => {
       if (!(value > 0 && Number.isInteger(value))) {
           throw new Error('Invalid fee type');
       } 
     }
   ),


];


const validateUpdate = [
    body("creator_id", "Please enter a creator detail")
    .exists({checkFalsy: true})
    .not().isEmpty()
    .custom((value, { req }) => {
       if (!(value > 0 && Number.isInteger(value))) {
           throw new Error('Invalid creator id');
       } 
     }
   ),
    body("crypto_id", "Please enter a crypto asset type")
     .exists({checkFalsy: true})
     .not().isEmpty()
     .custom((value, { req }) => {
        if (!(value > 0 && Number.isInteger(value))) {
            throw new Error('Invalid crypto asset id');
        } 
      }
    ),
    body("seller_id", "Please enter seller info")
    .exists({checkFalsy: true})
    .not().isEmpty()
    .custom((value, { req }) => {
       if (!(value > 0 && Number.isInteger(value))) {
           throw new Error('Invalid seller id');
       } 
     }
   ),
    body("buyer_id", "Please enter correct buyer details")
   .exists({checkFalsy: true})
   .not().isEmpty()
   .custom((value, { req }) => {
      if (!(value > 0 && Number.isInteger(value))) {
          throw new Error('Invalid buyer');
      } 
    }
  ),

    body("receiving_wallet")
     .not().isEmpty()
     .trim()
     .escape()
     .custom((value, { req }) => {

        if(!(typeof myVar === 'string' || myVar instanceof String)){
            throw new Error('Invalid wallet type');
        }
         if(isNaN(value)){
            throw new Error('Wallet can\'t be empty');
         }
     }),
    body("fiat_amt", "Please enter amount")
     .exists({checkFalsy: true})
     .not().isEmpty()
     .custom((value, { req }) => {
        if (!(value > 0 && Number.isInteger(value))) {
            throw new Error('Invalid amount type');
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
//     body("ads_id", "Please enter ads type")
//     .exists({checkFalsy: true})
//     .not().isEmpty()
//     .custom((value, { req }) => {
//        if (!(value > 0 && Number.isInteger(value))) {
//            throw new Error('Invalid advert type');
//        } 
//      }
//    ),
    
    body("closed", "Please enter your status")
     .exists({checkFalsy: true})
     .not().isEmpty()
     .custom((value, { req }) => {
        if (!(value == 0 || value == 1 && Number.isInteger(value))) {
            throw new Error('Invalid status type');
        } 
      }
    ),
    body("fee", "Enter fee")
    .exists({checkFalsy: true})
    .not().isEmpty()
    .custom((value, { req }) => {
       if (!(value > 0 && Number.isInteger(value))) {
           throw new Error('Invalid fee type');
       } 
     }
   ),


];


module.exports = {
    validateCreate,
    validateEdit
};