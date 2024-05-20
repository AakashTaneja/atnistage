const asyncHandler = require('express-async-handler');


const { entertainmentModel } = require('../models/entertainmentModel');
const { performance } = require("perf_hooks");


const dotenv = require("dotenv").config();
const newsdataEntertainmentJson = require('../newsdataEntJSON');
// const newsSiteLogo = require('../newsSiteLogos');

//console.log("picked up "+process.env.ENV);

const getAllEntertainmentNews = asyncHandler(async (req, res) => {
    const t0 = performance.now();
    const page = req.query.page || 0;
    const resPerPage = req.query.limit;
    const slice = req.query.slice

    if (process.env.ENV === "STAGE") {
        console.log("Environent is stage, for entertainment responding with file newsdataEntJSON")
        res.json(newsdataEntertainmentJson);
    }
    else { // for else assume prod and send back from database.
        if (typeof (slice) != 'undefined') {
            //console.log('slice is ' + slice)
            const news = await entertainmentModel.find().sort({ 'index': 1 }).skip(slice);
            res.json(news);
        }
        else {
            //console.log("Environent is prod, for entertainment responding from database");
            const news = await entertainmentModel.find().sort({ 'index': 1 }).skip(page * resPerPage).limit(resPerPage);
            res.json(news);
        }

    }
    const t1 = performance.now();
    console.log('responding /api/entertainment in ms '+(t1 - t0))

})



module.exports = {
    getAllEntertainmentNews
}