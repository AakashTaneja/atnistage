const mongoose = require("mongoose");

const vehiclesShema = {

    "index": Number,
    headline: Object,
    social: [Object],
    notification_id: String
}

const vehiclesModel = mongoose.model("vehicles", vehiclesShema);


module.exports = { vehiclesModel };