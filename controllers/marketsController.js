const asyncHandler = require('express-async-handler');


const { marketsModel } = require('../models/marketsModel');


const dotenv = require("dotenv").config();
const newsdataMarketsJson = require('../newsdataMarketsJSON');
// const newsSiteLogo = require('../newsSiteLogos');

//console.log("picked up "+process.env.ENV);

const getAllMarketsNews = asyncHandler(async (req, res) => {
    const page = req.query.page || 0;
    const resPerPage = req.query.limit;
    const slice = Number(req.query.slice)

    if (process.env.ENV === "STAGE") {
        console.log("Environent is stage, for markets responding with file newsdataMarketsJson")
        res.json(newsdataMarketsJson);
    }
    else { // for else assume prod and send back from database.
        if (typeof (slice) != 'undefined') {
            if (slice === 0) {
                //console.log('slice is ' + slice)
                const news = await marketsModel.find().sort({ 'index': 1 }).skip(slice);
                res.json(news);
            }
            else if (slice > 0) {
                const news = await marketsModel.find().sort({ 'index': 1 }).skip(slice + 1);
                res.json(news);
            }

        }
        else {
            console.log("Environent is prod, for markets responding from news database");
            const news = await marketsModel.find().sort({ 'index': 1 }).skip(page * resPerPage).limit(resPerPage);
            res.json(news);
        }

    }

})



module.exports = {
    getAllMarketsNews
}