const mongoose = require("mongoose");

const searchrecShema = {

    "index": Number,
    "last_updated": Date,
    "Name": Object
}

const searchrecModel = mongoose.model("search_recommendations", searchrecShema);


module.exports = { searchrecModel };