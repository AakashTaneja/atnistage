const asyncHandler = require('express-async-handler');

const { sectionsModel } = require('../models/sectionsModel');


const getAllSections = asyncHandler(async (req, res) => {

    console.log("Environent is prod, responding from sections database");
    const sections = await sectionsModel.find();
    //console.log('sections are ' + sections)
    res.json(sections);

})


module.exports = {
    getAllSections
}