const asyncHandler = require('express-async-handler');


const { sportsModel } = require('../models/sportsModel');
const { performance } = require("perf_hooks");


const dotenv = require("dotenv").config();
const newsdataSportsJson = require('../newsdataSportsJSON');
// const newsSiteLogo = require('../newsSiteLogos');

//console.log("picked up "+process.env.ENV);

const getAllSportsNews = asyncHandler(async (req, res) => {
    const t0 = performance.now();
    const page = req.query.page || 0;
    const resPerPage = req.query.limit;
    const slice = req.query.slice;
    const exclude_notification_id = req.query.exclude;

    if (process.env.ENV === "STAGE") {
        console.log("Environent is stage, for sports responding with file newsdataEntJson")
        res.json(newsdataSportsJson);
    }
    else { // for else assume prod and send back from database.
        if (typeof (slice) != 'undefined') {
            //console.log('slice is ' + slice)
            const news = await sportsModel.find().sort({ 'index': 1 }).skip(slice);
            res.json(news);
        }
        else {
            if (typeof (exclude_notification_id) != 'undefined') {
                console.log('exclude_notification_id is ' + exclude_notification_id)
                const searchCriteria = { 'notification_id': { $ne: exclude_notification_id } };
                const news = await sportsModel.find(searchCriteria).sort({ 'index': 1 });
                res.json(news);
            }
            else{
                //console.log("Environent is prod, for markets responding from news database");
                const news = await sportsModel.find().sort({ 'index': 1 });
                res.json(news);
            }
            
        }

    }
    const t1 = performance.now();
    console.log('responding /api/sports in ms '+(t1 - t0))

})



module.exports = {
    getAllSportsNews
}