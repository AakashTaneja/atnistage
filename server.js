const { errorHandler } = require('./middleWare/errorMiddleware')
const express = require("express");
const connectDB = require('./config/db')
const cors = require("cors");
const path = require('path');
const PORT = process.env.PORT || 3002;
const app = express();
const rateLimit = require('express-rate-limit');
const { databaseSearch } = require('./search/searchKey')

const limiter = rateLimit(
   {
      limit: 50,
      windowMs: 10000,
   }
)
app.use(limiter);


const corsOptions = {
   origin: '*',
   credentials: true,            //access-control-allow-credentials:true
   optionSuccessStatus: 200,
}


app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors(corsOptions));

connectDB();


app.use('/api/news', require('./routes/newsRoute'));
app.use('/api/entertainment', require('./routes/entertainmentRoute'));
app.use('/api/sports', require('./routes/sportsRoute'));
app.use('/api/markets', require('./routes/marketsRoute'));
app.use('/api/technology', require('./routes/technologyRoute'));
app.use('/api/sections', require('./routes/sectionsRoute'));
app.use('/api/health', require('./routes/healthRoute'));
app.use('/api/science', require('./routes/scienceRoute'));
app.use('/api/trending', require('./routes/trendingRoute'));
app.use('/api/search', (req, res) => {
   const search_key = req.query.query
   const full_key = req.query.full
   var searchRegex;
   const collectionsToSearch = ['news', 'sports', 'technology', 'entertainment', 'markets', 'health', 'science'];
   if (typeof (full_key) == 'undefined') {
      searchRegex = new RegExp(search_key.split(/\s+/).join('|'), 'i'); //this is to serach any of the multiple words provided.
      //console.log('no full_key search regex is ' + searchRegex)
   }
   else {
      searchRegex = new RegExp('\\b' + search_key + '\\b', 'i'); //this is to serach case insensitive.
      //console.log('full_key search regex is ' + searchRegex)
   }
   //console.log('search regex is ' + searchRegex)
   const searchCriteria = {
      $or: [
         { headline: { $regex: searchRegex } },
         { summary: { $regex: searchRegex } },
         // { keywords: { $regex: searchRegex } },
         // Add more fields as needed
      ],
   };

   if (typeof (search_key) == 'undefined') {
      console.log("Environent is prod, responding from sections database");
      //console.log('sections are ' + sections)
      res.json('please provide query');
   }
   else {
      //console.log('key is ' + key)
      databaseSearch(searchCriteria, collectionsToSearch)
         .then(results => {
            if (results) {
               //console.log('Combined search results:', results);
               res.json(results)
            } else {
               console.error('No results found.');
               res.json('no result found')
            }
         })
         .catch(error => {
            console.error('Error:', error);
         });
   }

});
app.use('/api/searchtrends', (req, res) => {
   const search_key = req.query.query
   const full_key = req.query.full
   var searchRegex;
   const collectionsToSearch = ['news', 'sports', 'technology', 'entertainment', 'markets', 'health', 'science'];
   if (typeof (full_key) == 'undefined') {
      searchRegex = new RegExp(search_key.split(/\s+/).join('|'), 'i'); //this is to serach any of the multiple words provided.
      //console.log('no full_key search regex is ' + searchRegex)
   }
   else {
      searchRegex = new RegExp('\\b' + search_key + '\\b', 'i'); //this is to serach case insensitive.
      //console.log('full_key search regex is ' + searchRegex)
   }
   //console.log('search regex is ' + searchRegex)
   const searchCriteria = {
      $or: [
         { headline: { $regex: searchRegex } },
         // { keywords: { $regex: searchRegex } },
         // Add more fields as needed
      ],
   };

   if (typeof (search_key) == 'undefined') {
      console.log("Environent is prod, responding from sections database");
      //console.log('sections are ' + sections)
      res.json('please provide query');
   }
   else {
      //console.log('key is ' + key)
      databaseSearch(searchCriteria, collectionsToSearch)
         .then(results => {
            if (results) {
               //console.log('Combined search results:', results);
               res.json(results)
            } else {
               console.error('No results found.');
               res.json('no result found')
            }
         })
         .catch(error => {
            console.error('Error:', error);
         });
   }

});
app.use(errorHandler);

//serve static assets if in production
if (process.env.NODE_ENV === 'production') {
   // set static folder
   app.use(express.static('client/build'))

   app.get('*', (req, res) => {
      res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
   });
}


app.listen(PORT, () => console.log("server started on " + PORT));