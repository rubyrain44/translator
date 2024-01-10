//brings in the model
const Pokemon = require("../models/Pokemon");

module.exports = {

    //request, response
    findAll: (req, res) => {
        Pokemon.find()
            //req to find all, promise returns an array of all results
            .then( allPokemon => res.json(allPokemon) )
            .catch( err => res.json(err))
    },

    // //finds a single pokemon by using the id being passed through
    // findOne: (req, res) => {
    //     Pokemon.findById(req.params.id)
    //     .then( onePokemon => res.json(onePokemon) )
    //     .catch( err => res.json(err))
    // },

    // //passes the data from the model in through req.body
    // create: (req, res) => {
    //     Pokemon.create(req.body)
    //         .then( newPokemon => res.json(newPokemon) )
    //         .catch( err => res.json(err))
    // }, 

    // update: (req, res) => {
    //     Pokemon.findByIdAndUpdate(req.params.id, req.body, {new: true} )
    //         .then( updatedPokemon => res.json( updatedPokemon) )
    //         .catch( err => console.log(err))
    // }, 

    // delete: (req, res) => {
    //     Pokemon.findByIdAndDelete(req.params.id)
    //         .then( deletedPokemon => res.json(deletedPokemon) )
    //         .catch( err => res.json(err))
    // }
}