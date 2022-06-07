const {errorHandler} = require('./middleWare/errorMiddleware')
const express = require("express");
const connectDB = require('./config/db')
const cors=require("cors");
const path = require('path');
const PORT = process.env.PORT || 3001;
const app = express();


const corsOptions ={
   origin:'*', 
   credentials:true,            //access-control-allow-credentials:true
   optionSuccessStatus:200,
}


app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cors(corsOptions)) ;


connectDB();

app.use('/api/news', require('./routes/newsRoute'));
app.use(errorHandler);

//serve static assets if in production
if(process.env.NODE_ENV === 'production'){
   // set static folder
   app.use(express.static('client/build'))

   app.get('*', (req, res) => {
      res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
   });
}


app.listen(PORT, ()=> console.log("server started on "+ PORT));