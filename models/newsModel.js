const mongoose = require("mongoose");

const newsShema = {

    "index": Number,
    headline: Object,
    social: [Object],
    notification_id: String
}

const logosShema = {
    logosMap: Object,
}

const newsModel = mongoose.model("news", newsShema);
const logosModel = mongoose.model("logos", logosShema);

module.exports = { newsModel, logosModel };