const { errorHandler } = require('./middleWare/errorMiddleware')
const express = require("express");
const connectDB = require('./config/db')
const cors = require("cors");
const path = require('path');
const PORT = process.env.PORT || 3002;
const app = express();
const rateLimit = require('express-rate-limit');
const { databaseSearch } = require('./search/searchKey')
const { videoData } = require('./search/videoData')
const { performance } = require("perf_hooks");

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
app.use('/api/vehicles', require('./routes/vehiclesRoute'));
app.use('/api/world', require('./routes/worldRoute'));
app.use('/api/trending', require('./routes/trendingRoute'));
app.use('/api/searchrec', require('./routes/searchrecRoute'));
app.use('/api/search', (req, res) => {
   const t0 = performance.now();
   const search_key = req.query.query
   const full_key = req.query.full
   var searchRegex;
   const collectionsToSearch = ['news', 'news_archive', 'sports', 'sports_archive', 'technology','technology_archive', 'entertainment', 'entertainment_archive', 'markets', 'markets_archive','health', 'health_archive', 'science', 'science_archive', 'vehicles', 'vehicles_archive', 'world', 'world_archive'];
   //const collectionsToSearch = ['news', 'sports', 'technology', 'entertainment', 'markets', 'health', 'science',];
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
        // { summary: { $regex: searchRegex } }, as we move to archive, no checking summary to keep load time short, this is now essentially like /api/searchtrends
         // { keywords: { $regex: searchRegex } },
         // Add more fields as needed
      ],
   };

   if (typeof (search_key) == 'undefined') {
      //console.log("Environent is prod, responding from sections database");
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
   const t1 = performance.now();
   console.log('responding /api/search in ms '+(t1 - t0))

});
app.use('/api/searchtrends', (req, res) => {
   const t0 = performance.now();
   const search_key = req.query.query
   const full_key = req.query.full
   var searchRegex;
   const collectionsToSearch = ['news', 'sports', 'technology', 'entertainment', 'markets', 'health', 'science', 'vehicles', 'world'];
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
      //console.log("Environent is prod, responding from sections database");
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

   const t1 = performance.now();
   console.log('responding /api/searchtrends in ms '+(t1 - t0))

});

app.use('/api/notifications', (req, res) => {
   const t0 = performance.now();
   // Extract notification_id from the query parameters
   const notification_id = req.query.notification_id;

   
   // Check if notification_id is provided
   if (!notification_id) {
      return res.status(400).send('Please provide notification id');
   }

   // Define the collections to search
   const collectionsToSearch = ['notifications'];
   // Define the search criteria
   const searchCriteria = { 'notification_id': notification_id };

   // Call the databaseSearch function
   databaseSearch(searchCriteria, collectionsToSearch)
   .then(result => {
         res.json(result);
   })
   .catch(error => {
         console.error('Error during database search:', error);
         res.status(500).send('Internal Server Error');
   });
   const t1 = performance.now();
   console.log('responding /api/notifications in ms '+(t1 - t0))

});

app.use('/api/videos_data', (req, res) => {
   const t0 = performance.now();
   // Extract notification_id from the query parameters
   const video_type = req.query.videotype;

   
   // Check if video_type is provided
   if (!video_type) {
      return res.status(400).send('Please provide video type');
   }
   else{
      if(video_type === 'MULTI_LONG' )
      {
         videoData(video_type)
         .then(result => {
         res.json(result);
         })
         .catch(error => {
          console.error('Error during videos_data: for MULTI_LONG', error);
            res.status(500).send('Internal Server Error');
   });
      }  
         else{
            return res.status(400).send('Please provide valid video type');
        }
   
      

   }
   const t1 = performance.now();
   console.log('responding /api/videos_data in ms '+(t1 - t0))

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