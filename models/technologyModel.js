const mongoose = require("mongoose");

const technologyShema = {

    "index": Number,
    headline: Object,
    social: [Object]
}

const technologyModel = mongoose.model("technology", technologyShema);


module.exports = { technologyModel };