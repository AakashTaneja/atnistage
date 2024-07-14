const mongoose = require("mongoose");

const scienceShema = {

    "index": Number,
    headline: Object,
    social: [Object],
    notification_id: String
}

mongoose.pluralize(null);

const scienceModel = mongoose.model("science", scienceShema);


module.exports = { scienceModel };