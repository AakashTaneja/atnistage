const mongoose = require("mongoose");

const technologyShema = {

    "index": Number,
    headline: Object,
    social: [Object]
}

mongoose.pluralize(null);

const technologyModel = mongoose.model("technology", technologyShema);


module.exports = { technologyModel };