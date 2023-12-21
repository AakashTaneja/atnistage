const asyncHandler = require('express-async-handler');

const { technologyModel } = require('../models/technologyModel')


const dotenv = require("dotenv").config();
const newsdataTechnologyJson = require('../newsdataSportsJSON');
// const newsSiteLogo = require('../newsSiteLogos');

//console.log("picked up "+process.env.ENV);

const getAllTechnologyNews = asyncHandler(async (req, res) => {
    const page = req.query.page || 0;
    const resPerPage = req.query.limit;
    if (process.env.ENV === "STAGE") {
        console.log("Environent is stage, for technolog responding with file newsdataEntJson")
        res.json(newsdataTechnologyJson);
    }
    else { // for else assume prod and send back from database.
        console.log("Environent is prod, for technolog responding from news database");
        const news = await technologyModel.find().sort({ 'index': 1 }).skip(page * resPerPage).limit(resPerPage);
        res.json(news);
    }

})



module.exports = {
    getAllTechnologyNews
}