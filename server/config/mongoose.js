//mongoose is middleware to allow mongodb and express to talk to each other
//bringing in mongoose to the project
const mongoose = require('mongoose');

//call it, and points to the db location (127 is the same as localhost, but can prevent issues)
//if the db doesn't already exist, it will create it
mongoose.connect("mongodb://127.0.0.1/mongodb_sql_translator", { 
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    //returns a promise, and the result of the function
    .then( ()=> console.log("Connected to the database."))
    //what happens if a promise errors, and doesn't get a result
    .catch( err => console.log("Something went wrong connecting to the database.", err ))
    //prints the string, and the error returned