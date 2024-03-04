const mongoose = require("mongoose");

const trendingShema = {

    "index": Number,
    "date_created": Date
}

const trendingModel = mongoose.model("trending", trendingShema);


module.exports = { trendingModel };