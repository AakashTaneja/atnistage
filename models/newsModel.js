const mongoose = require("mongoose");

const newsShema = {

    "index": Number,
    headline: Object,
    social: [Object]
}

const newsModel = mongoose.model("news", newsShema);

module.exports = newsModel;