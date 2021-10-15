const router = require("../services/localbankService")
const validator = require("express-validator");


const CreateBank = async (req, res) => {
    
    // Validate required fields
    const errorsArr = [];
    const validationErrors = validator.validationResult(req);
    if (!validationErrors.isEmpty()) {
        let errors = Object.values(validationErrors.mapped());
        errors.forEach((item) => {
            errorsArr.push(item.msg);
        });
        req.flash("errors", errorsArr);
        return res.redirect("/localbank/create");
    }

    // Create a new bank
    const newBank = {
        id: req.user.id,
        user_name: req.body.user_name,
        account_number: req.body.account_number,
        bank_name: req.body.bank_name,
        created_at: req.body.created_at,
        //updated_at: req.body.updated_at
    };

    try {
        await localBankService.createNewBank(newBank);
        return res.redirect("/localbank/");
    } catch (err) {
        req.flash("errors", err);
        return res.redirect("/localbank/create");
    }

};
const ViewUserBank = (req,res) => {

    // View user new bank
    const viewUserBank = {
        id: req.user.id

    };

    try {
        await localBankService.viewUserBank(viewUserBank);
        return res.redirect("/localbank/");
    } catch (err) {
        req.flash("errors", err);
        return res.redirect("/localbank/viewUser");
    }

};


const ViewAllBank = (req,res) => {
        // View user new bank
        const viewUserBank = {
            id: req.body.id
        };
    
        try {
            await localBankService.viewAllBank(viewUserBank);
            return res.redirect("/localbank/");
        } catch (err) {
            req.flash("errors", err);
            return res.redirect("/localbank/view/");
        }
    
    
}

const UpdateBank = (req,res) => {

    // Validate required fields
    const errorsArr = [];
    const validationErrors = validator.validationResult(req);
    if (!validationErrors.isEmpty()) {
        let errors = Object.values(validationErrors.mapped());
        errors.forEach((item) => {
            errorsArr.push(item.msg);
        });
        req.flash("errors", errorsArr);
        return res.redirect("/localbank/update");
    }
    // View user new bank
    const update_info = {
        id: req.user.id,
        user_name: req.body.user_name,
        account_number: req.body.account_number,
        bank_name: req.body.bank_name,
        //created_at: req.body.created_at,
        updated_at: req.body.updated_at
    };

    try {
        await localBankService.updateBank(update_info);
        return res.redirect("/localbank/");
    } catch (err) {
        req.flash("errors", err);
        return res.redirect("/localbank/update/");
    }
    
    
}

const DeleteBank = (req,res) => {
        // View user new bank
        const delete_bank = {
            id: req.user.id,
            //user_name: req.body.user_name,
            // account_number: req.body.account_number,
            // bank_name: req.body.bank_name,
            //created_at: req.body.created_at,
            //updated_at: req.body.updated_at
        };
    
        try {
            await localBankService.deleteBank(delete_bank);
            return res.redirect("/localbank/");
        } catch (err) {
            req.flash("errors", err);
            return res.redirect("/localbank/delete/");
        }
    
    
}

module.exports = {
    CreateBank,
    ViewUserBank, 
    ViewAllBank,
    UpdateBank, 
    DeleteBank
};