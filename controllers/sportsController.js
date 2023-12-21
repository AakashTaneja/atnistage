const asyncHandler = require('express-async-handler');


const { sportsModel } = require('../models/sportsModel');


const dotenv = require("dotenv").config();
const newsdataSportsJson = require('../newsdataSportsJSON');
// const newsSiteLogo = require('../newsSiteLogos');

//console.log("picked up "+process.env.ENV);

const getAllSportsNews = asyncHandler(async (req, res) => {
    const page = req.query.page || 0;
    const resPerPage = req.query.limit;
    if (process.env.ENV === "STAGE") {
        console.log("Environent is stage, for sports responding with file newsdataEntJson")
        res.json(newsdataSportsJson);
    }
    else { // for else assume prod and send back from database.
        console.log("Environent is prod, for sports responding from news database");
        const news = await sportsModel.find().sort({ 'index': 1 }).skip(page * resPerPage).limit(resPerPage);
        res.json(news);
    }

})



module.exports = {
    getAllSportsNews
}