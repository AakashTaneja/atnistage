const mongoose = require("mongoose");

const sportsShema = {

    "index": Number,
    headline: Object,
    social: [Object],
    notification_id: String
}

const sportsModel = mongoose.model("sports", sportsShema);


module.exports = { sportsModel };