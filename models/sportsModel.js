const mongoose = require("mongoose");

const sportsShema = {

    "index": Number,
    headline: Object,
    social: [Object]
}

const sportsModel = mongoose.model("sports", sportsShema);


module.exports = { sportsModel };