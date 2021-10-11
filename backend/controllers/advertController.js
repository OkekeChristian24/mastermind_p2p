const advertService = require("./../services/advertService");
const validator = require("express-validator");

const createNewAd = async (req, res) => {

    // Validate required fields
    const errorsArr = [];
    const validationErrors = validator.validationResult(req);
    if (!validationErrors.isEmpty()) {
        let errors = Object.values(validationErrors.mapped());
        errors.forEach((item) => {
            errorsArr.push(item.msg);
        });
        req.flash("errors", errorsArr);
        return res.redirect("/adverts/create");
    }

    

    // Create a new ad
    const newAd = {
        creator_id: req.user.id,
        crypto_id: req.body.crypto_id,
        fiat_id: req.body.fiat_id,
        advert_type: req.body.advert_type,
        price: req.body.price,
        fiat_min_amt: req.body.fiat_min_amt,
        fiat_max_amt: req.body.fiat_max_amt,
        terms: req.body.terms,
        online: req.body.online,
    };

    try {
        await advertService.createNewAd(newAd);
        return res.redirect("/adverts/");
    } catch (err) {
        req.flash("errors", err);
        return res.redirect("/adverts/create");
    }

};


const editAd = async (req, res) => {

    // Validate required fields
    const errorsArr = [];
    const validationErrors = validator.validationResult(req);
    if (!validationErrors.isEmpty()) {
        let errors = Object.values(validationErrors.mapped());
        errors.forEach((item) => {
            errorsArr.push(item.msg);
        });
        req.flash("errors", errorsArr);
        return res.redirect("/adverts/edit");
    }

    

    // Get ad content
    const editedAd = {
        creator_id: req.user.id,
        crypto_id: req.body.crypto_id,
        fiat_id: req.body.fiat_id,
        advert_type: req.body.advert_type,
        price: req.body.price,
        fiat_min_amt: req.body.fiat_min_amt,
        fiat_max_amt: req.body.fiat_max_amt,
        terms: req.body.terms,
        online: req.body.online,
    };

    try {
        await advertService.editAd(editedAd);
        return res.redirect("/adverts/");
    } catch (err) {
        req.flash("errors", err);
        return res.redirect("/adverts/create");
    }

};


module.exports = {
    createNewAd,
    editAd
};