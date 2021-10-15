const { createTx, viewTx, viewTxs, closeTx, deleteTx } = require(
    "../services/transactionService");
const validator = require("express-validator");




const CreateTxn = (req,res) => {
    // Validate required fields
    const errorsArr = [];
    const validationErrors = validator.validationResult(req);
    if (!validationErrors.isEmpty()) {
        let errors = Object.values(validationErrors.mapped());
        errors.forEach((item) => {
            errorsArr.push(item.msg);
        });
        req.flash("errors", errorsArr);
        return res.redirect("/transactions/create");
    }

    // Create a new bank
    const newTx = {
        id: req.user.id,
        creator_id: req.body.creator_id,
        crypto_id: req.body.crypto_id,
        seller_id: req.body.seller_id,
        buyer_id: req.body.buyer_id,
        receiving_wallet: req.body.receiving_wallet,
        crypto_amt: req.body.crypto_amt,
        fiat_amt: req.body.fiat_amt,
        fiat_id: req.body.fiat_id,
        ads_id: req.body.ads_id,
        closed: req.body.closed,
        cancelled: req.body.cancelled,
        fee: req.body.fee,
        created_at: req.body.created_at,
        updated_at: req.body.updated_at
    };

    try {
        await transactionService.createTx(newTx);
        return res.redirect("/transactions/");
    } catch (err) {
        req.flash("errors", err);
        return res.redirect("/transactions/create");
    }
}

// Used to get the details of a particular transaction
const ViewTxn = (req,res) => {
    const viewTx = {
        id: req.user.id,

    };

    try {
        await transactionService.viewTx(viewTx);
        return res.redirect("/transactions/");
    } catch (err) {
        req.flash("errors", err);
        return res.redirect("/transactions/viewTx");
    }
}

// Used to get all transactions of a user or creator
const ViewTxns = (req,res) => {
    const viewTxs = {
        //id: req.user.id,
        creator_id: req.body.creator_id,
    };

    try {
        await transactionService.viewTxs(viewTxs);
        return res.redirect("/transactions/");
    } catch (err) {
        req.flash("errors", err);
        return res.redirect("/transactions/viewTxs");
    }
}
const CloseTxn = (req,res) => {
    const closeTx = {
        id: req.id,
        closed: req.body.closed,
        updated_at: req.body.updated_at
    };

    try {
        await transactionService.closeTx(closeTx);
        return res.redirect("/transactions/");
    } catch (err) {
        req.flash("errors", err);
        return res.redirect("/transactions/close");
    }
}

const DeleteTxn = (req,res) => {
    
    const deleteTx ={
        id: req.body.id
    };
    try {
        await transactionService.deleteTx(closeTx);
        return res.redirect("/transactions/");
    } catch (err) {
        req.flash("errors", err);
        return res.redirect("/transactions/deleteTxn");
    }

}

module.exports = {
    CreateTxn,
    ViewTxn, 
    ViewTxns,
    CloseTxn, 
    DeleteTxn
};