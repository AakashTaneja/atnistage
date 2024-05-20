const asyncHandler = require('express-async-handler');

const { trendingModel } = require('../models/trendingModel')
const { performance } = require("perf_hooks");


const dotenv = require("dotenv").config();
const newsdataTechnologyJson = require('../newsdataSportsJSON');
// const newsSiteLogo = require('../newsSiteLogos');

//console.log("picked up "+process.env.ENV);

const getAllTrendingNews = asyncHandler(async (req, res) => {
    const t0 = performance.now();

    if (process.env.ENV === "STAGE") {
        console.log("Environent is stage, for trending responding with file newsdataEntJson")
        res.json(newsdataTechnologyJson);
    }
    else { // for else assume prod and send back from database.
        //console.log('slice is ' + slice)
        const news = await trendingModel.find().sort({ 'index': 1 });
        res.json(news);

    }
    const t1 = performance.now();
    console.log('responding /api/trending in ms '+(t1 - t0))

})



module.exports = {
    getAllTrendingNews
}