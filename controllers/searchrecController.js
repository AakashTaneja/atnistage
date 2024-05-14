const asyncHandler = require('express-async-handler');

const { searchrecModel } = require('../models/searchrecModel')


const dotenv = require("dotenv").config();
const newsdataTechnologyJson = require('../newsdataSportsJSON');
// const newsSiteLogo = require('../newsSiteLogos');

//console.log("picked up "+process.env.ENV);

const getAllSearchRec = asyncHandler(async (req, res) => {

    if (process.env.ENV === "STAGE") {
        console.log("Environent is stage, for trending responding with file newsdataEntJson")
        res.json(newsdataTechnologyJson);
    }
    else { // for else assume prod and send back from database.
        //console.log('slice is ' + slice)
        const news = await searchrecModel.find();
        res.json(news);

    }

})



module.exports = {
    getAllSearchRec
}