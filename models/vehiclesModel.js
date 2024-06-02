const mongoose = require("mongoose");

const vehiclesShema = {

    "index": Number,
    headline: Object,
    social: [Object]
}

const vehiclesModel = mongoose.model("vehicles", vehiclesShema);


module.exports = { vehiclesModel };