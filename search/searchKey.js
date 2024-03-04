const MongoClient = require('mongodb').MongoClient;
const dotenv = require("dotenv").config();

const uri = process.env.MONGO_URI;
const dbName = 'atni';

async function databaseSearch(searchCriteria, collectionNames) {
  try {
    // Connect to the MongoDB database
    const client = await MongoClient.connect(uri);
    const db = client.db(dbName);

    // db.db.command({ "connPoolStats": 1 }, function (err, result) {
    //   console.log(result, err);
    // });
    //console.log('client is ' + client)
    // Initialize an empty array to store search results
    const combinedResults = [];

    // Iterate through each collection name in the provided list
    for (const collectionName of collectionNames) {
      // Skip collections starting with "_system"
      if (collectionName.startsWith('_system')) {
        continue;
      }

      // Access the current collection
      const collection = db.collection(collectionName);
      //console.log('collection is ' + JSON.stringify(collection))
      // Find documents matching the search criteria
      const results = await collection.find(searchCriteria).toArray();
      //console.log('result is ' + results)

      // Add the results from this collection to the combined array
      combinedResults.push(...results);
    }
    // Close the MongoDB connection
    await client.close();

    // Return the combined search results in JSON format
    return (combinedResults);
  } catch (error) {
    console.error('Error searching collections:', error);
    return null;
  }
}


module.exports = { databaseSearch };