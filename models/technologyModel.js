const mongoose = require("mongoose");

const technologyShema = {

    "index": Number,
    headline: Object,
    social: [Object],
    notification_id: String
}

mongoose.pluralize(null);

const technologyModel = mongoose.model("technology", technologyShema);


module.exports = { technologyModel };