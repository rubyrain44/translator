const mongoose = require("mongoose");

const QuerySchema = new mongoose.Schema( { 
    query: String
}, {timestamps: true} )

module.exports = (mongoose.model("Query", QuerySchema));