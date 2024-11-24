const MongoClient = require('mongodb').MongoClient;
const dotenv = require("dotenv").config();

const uri = process.env.MONGO_URI;
const dbName = 'atni';
var documents = ''

async function videoData(video_type) {
  try { 
    // Connect to the MongoDB database
        const client = await MongoClient.connect(uri);
        const db = client.db(dbName);
        if (video_type === 'MULTI_LONG'){
            const collection = db.collection('video_multi_long');
            // Fetch all documents
            documents = await collection.find({}).toArray();
            console.log("Documents fetched successfully for videoData:", documents);
        }


    // Close the MongoDB connection
    await client.close();
    return documents;
    
  } catch (error) {
    console.error('Error searching collections for videoData:', error);
    return null;
  }
}


module.exports = { videoData };