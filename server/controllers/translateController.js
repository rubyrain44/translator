const Query = require("../models/Query");

module.exports = {

    findAll: (req, res) => {
        Query.find()
            //req to find all, promise returns an array of all results
            .then( allQueries => res.json(allQueries) )
            .catch( err => res.json(err))
    },

    //passes the data from the model in through req.body
    create: (req, res) => {
        Query.create(req.body)
            .then( newQuery => res.json(newQuery) )
            .catch( err => res.json(err))
    }
    
}