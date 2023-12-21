const asyncHandler = require('express-async-handler');


const { entertainmentModel } = require('../models/entertainmentModel');


const dotenv = require("dotenv").config();
const newsdataEntertainmentJson = require('../newsdataEntJSON');
// const newsSiteLogo = require('../newsSiteLogos');

//console.log("picked up "+process.env.ENV);

const getAllEntertainmentNews = asyncHandler(async (req, res) => {
    const page = req.query.page || 0;
    const resPerPage = req.query.limit;
    if (process.env.ENV === "STAGE") {
        console.log("Environent is stage, for entertainment responding with file newsdataEntJSON")
        res.json(newsdataEntertainmentJson);
    }
    else { // for else assume prod and send back from database.
        console.log("Environent is prod, for entertainment responding from news database");
        const entertainment = await entertainmentModel.find().sort({ 'index': 1 }).skip(page * resPerPage).limit(resPerPage);
        res.json(entertainment);
    }

})



module.exports = {
    getAllEntertainmentNews
}