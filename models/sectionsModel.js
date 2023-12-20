const mongoose = require("mongoose");

const sectionsSchema = {
    display: Object,
    db: Object,
}

const sectionsModel = mongoose.model("sections", sectionsSchema);

module.exports = { sectionsModel };