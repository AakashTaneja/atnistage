const mongoose = require("mongoose");

const scienceShema = {

    "index": Number,
    headline: Object,
    social: [Object]
}

mongoose.pluralize(null);

const scienceModel = mongoose.model("science", scienceShema);


module.exports = { scienceModel };