const mongoose = require("mongoose");

const marketsShema = {

    "index": Number,
    headline: Object,
    social: [Object],
    notification_id: String
}

const marketsModel = mongoose.model("markets", marketsShema);


module.exports = { marketsModel };