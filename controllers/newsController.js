const asyncHandler = require('express-async-handler');

const { newsModel } = require('../models/newsModel');
const { performance } = require("perf_hooks");



const dotenv = require("dotenv").config();
const newsdataJSON = require('../newsdataJSON');
// const newsSiteLogo = require('../newsSiteLogos');

//console.log("picked up "+process.env.ENV);

const getAllNews = asyncHandler(async (req, res) => {
    const t0 = performance.now();
    const page = req.query.page || 0;
    const resPerPage = req.query.limit;
    const slice = req.query.slice

    if (process.env.ENV === "STAGE") {
        console.log("Environent is stage, for news responding with file")
        res.json(newsdataJSON);
    }
    else { // for else assume prod and send back from database.
        if (typeof (slice) != 'undefined') {
            //console.log('slice is ' + slice)
            const news = await newsModel.find().sort({ 'index': 1 }).skip(slice);
            //console.log("Environent is prod, for news responding from news database, slice is " + slice);
            res.json(news)
        }
        else {
            console.log("Environent is prod, for news responding from news database");
            const news = await newsModel.find().sort({ 'index': 1 }).skip(page * resPerPage).limit(resPerPage);
            res.json(news);
        }

    }
    const t1 = performance.now();
    console.log('responding /api/news in ms '+(t1 - t0))

})

// const getAllNewsLogos = asyncHandler(async (req, res) => {
//     const page = req.query.page || 0;
//     const resPerPage = req.query.limit;
//     if (process.env.ENV === "STAGE") {
//         console.log("Environent is stage, responding with file for news site logos")
//         res.json(newsSiteLogo);
//     }
//     else { // for else assume prod and send back from database.
//         console.log("Environent is prod, responding from logos database");
//         const logos = await logosModel.find();
//         //console.log("logos are "+logos[0])
//         res.json(logos[0]);
//         //res.json(newsSiteLogo);
//         //Code the production database here, along with model
//     }

// })

//POST new news,
//route, POST api/news
//access, private
// const setNews = asyncHandler(async (req, res) => {
//     if (!req.body.title) {
//         res.status(400);
//         throw new Error("message: invalid request");

//     }
//     res.json({ message: "Set news" });
//     console.log(req.body);
// })


//PUT  news,
//route, PUT api/news/:id
//access, private
// const updateNews = asyncHandler(async (req, res) => {
//     res.json({ message: `Update news ${req.params.id}` });
// })

//Delete  news,
//route, DELETE api/news/:id
//access, private
// const deleteNews = asyncHandler(async (req, res) => {
//     res.json({ message: `Delete news ${req.params.id}` });
// })

module.exports = {
    getAllNews
}