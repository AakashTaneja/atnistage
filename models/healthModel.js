const mongoose = require("mongoose");

const healthShema = {

    "index": Number,
    headline: Object,
    social: [Object],
    notification_id: String
}

mongoose.pluralize(null);

const healthModel = mongoose.model("health", healthShema);


module.exports = { healthModel };