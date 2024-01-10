//bring in mongoose
const mongoose = require("mongoose");

//create a schema
const PokemonSchema = new mongoose.Schema( { 
    name: String,
    type: String,
    color: String
}, {timestamps: true} )
    //takes care of created at & updated at

//exports the model so it can be imported elsewhere
module.exports = (mongoose.model("Pokemon", PokemonSchema));