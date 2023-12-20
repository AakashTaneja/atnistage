const mongoose = require("mongoose");

const entertainmentShema = {

    "index": Number,
    headline: Object,
    social: [Object]
}

const entertainmentModel = mongoose.model("entertainment", entertainmentShema);


module.exports = { entertainmentModel };