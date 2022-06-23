const asyncHandler = require('express-async-handler');

const newsModel = require('../models/newsModel');

const dotenv = require("dotenv").config();
const newsdataJSON = require('../newsdataJSON');

//GET all news,
//route, GET api/news
//access, public

 
   

//console.log("picked up "+process.env.ENV);

const getAllNews = asyncHandler(async (req, res) => {
    const page = req.query.page || 0;
    const resPerPage = req.query.limit;
    if(process.env.ENV === "STAGE"){
        //console.log("Environent is stage, responding with file")
        res.json(newsdataJSON); 
    }
    else{ // for else assume prod and send back from database.
        //console.log("Environent is prod, responding from database");
        const news = await newsModel.find().sort({'index':1}).skip(page * resPerPage).limit(resPerPage);
        res.json(news);
    }
    
})

//POST new news,
//route, POST api/news
//access, private
const setNews = asyncHandler(async (req, res) => {
    if(! req.body.title){
        res.status(400);
        throw new Error("message: invalid request");
        
    }
    res.json({message: "Set news"});
    console.log(req.body);
})


//PUT  news,
//route, PUT api/news/:id
//access, private
const updateNews = asyncHandler(async (req, res) => {
    res.json({message: `Update news ${req.params.id}`});
})

//Delete  news,
//route, DELETE api/news/:id
//access, private
const deleteNews = asyncHandler(async (req, res) => {
    res.json({message: `Delete news ${req.params.id}`});
})

module.exports = {
    getAllNews, 
    setNews,
    updateNews,
    deleteNews
}