const mongoose = require("mongoose");

const worldShema = {

    "index": Number,
    headline: Object,
    social: [Object]
}

const worldModel = mongoose.model("world", worldShema);


module.exports = { worldModel };