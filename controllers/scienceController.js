const asyncHandler = require('express-async-handler');


const { scienceModel } = require('../models/scienceModel');
const { performance } = require("perf_hooks");


const dotenv = require("dotenv").config();
const newsdataEntertainmentJson = require('../newsdataEntJSON');
// const newsSiteLogo = require('../newsSiteLogos');

//console.log("picked up "+process.env.ENV);

const getAllScienceNews = asyncHandler(async (req, res) => {
    const t0 = performance.now();
    const page = req.query.page || 0;
    const resPerPage = req.query.limit;
    const slice = req.query.slice;
    const exclude_notification_id = req.query.exclude;

    if (process.env.ENV === "STAGE") {
        console.log("Environent is stage, for entertainment responding with file newsdataEntJSON")
        res.json(newsdataEntertainmentJson);
    }
    else { // for else assume prod and send back from database.
        if (typeof (slice) != 'undefined') {
            //console.log('slice is ' + slice)
            const news = await scienceModel.find().sort({ 'index': 1 }).skip(slice);
            res.json(news);
        }
        else {
            if (typeof (exclude_notification_id) != 'undefined') {
                console.log('exclude_notification_id is ' + exclude_notification_id)
                const searchCriteria = { 'notification_id': { $ne: exclude_notification_id } };
                const news = await scienceModel.find(searchCriteria).sort({ 'index': 1 });
                res.json(news);
            }
            else{
                //console.log("Environent is prod, for markets responding from news database");
                const news = await scienceModel.find().sort({ 'index': 1 });
                res.json(news);
            }
            
        }

    }
    const t1 = performance.now();
    console.log('responding /api/science in ms '+(t1 - t0))

})



module.exports = {
    getAllScienceNews
}