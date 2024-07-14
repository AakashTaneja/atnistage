const mongoose = require("mongoose");

const entertainmentShema = {

    "index": Number,
    headline: Object,
    social: [Object],
    notification_id: String
}

mongoose.pluralize(null);

const entertainmentModel = mongoose.model("entertainment", entertainmentShema);


module.exports = { entertainmentModel };