const asyncHandler = require('express-async-handler');

const { sectionsModel } = require('../models/sectionsModel');
const { performance } = require("perf_hooks");

//https://api.nutshellnews.in/api/sections?section_name=section_name


const getAllSections = asyncHandler(async (req, res) => {
    const t0 = performance.now();

    const section_name = req.query.section_name
    const field_req = req.query.field

    if (typeof (section_name) == 'undefined') {
        //console.log("Environent is prod, responding from sections database");
        const sections = await sectionsModel.find();
        //console.log('sections are ' + sections)
        res.json(sections);
    }
    else {
        if (typeof (field_req) == 'undefined') {
            //console.log("Environent is prod, responding from section database");
            filter = { db: section_name }
            const section = await sectionsModel.find(filter);
            res.json(section);
        }
        else {
            //console.log("Environent is prod, responding field from section database");
            filter = { db: section_name }
            var field = field_req
            var json = {};
            json[field] = 1
            //console.log('field_req is ' + field_req)
            const section = await sectionsModel.find(filter).select(json);
            res.json(section);
        }

    }
    const t1 = performance.now();
    console.log('responding /api/sections in ms '+(t1 - t0))


})


module.exports = {
    getAllSections
}