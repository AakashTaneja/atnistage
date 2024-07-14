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
    const slice = req.query.slice;
    const exclude_notification_id = req.query.exclude;

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
        else { // usually slice case is not used, if you want to use it along with exlude then these conditions need to change
            if (typeof (exclude_notification_id) != 'undefined') {
                //console.log('exclude_notification_id is ' + exclude_notification_id)
                // Define the search criteria to exclude the specific notification_id
                const searchCriteria = { 'notification_id': { $ne: exclude_notification_id } };
                //const searchCriteria = { 'notification_id': exclude_notification_id };
                const news = await entertainmentModel.find(searchCriteria).sort({ 'index': 1 });
                //console.log("Environent is prod, for news responding from news database, slice is " + slice);
                res.json(news)
            }
            else{
                //console.log("Environent is prod, for entertainment responding from database");
                //const news = await entertainmentModel.find().sort({ 'index': 1 }).skip(page * resPerPage).limit(resPerPage);
                const news = await entertainmentModel.find().sort({ 'index': 1 });
                res.json(news);
            }

            
        }

    }
    const t1 = performance.now();
    console.log('responding /api/entertainment in ms '+(t1 - t0))

})



module.exports = {
    getAllEntertainmentNews
}