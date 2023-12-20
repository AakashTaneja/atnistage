const mongoose = require("mongoose");

const marketsShema = {

    "index": Number,
    headline: Object,
    social: [Object]
}

const marketsModel = mongoose.model("markets", marketsShema);


module.exports = { marketsModel };