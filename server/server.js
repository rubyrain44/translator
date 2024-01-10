//brings in express to the project
const express = require("express");
//express is the blueprints for the server, and the variable app holds that
const app = express();
//bring in mongoose config
require("./config/mongoose");
//requires the route, which follows the requires all the way down to the app in server
require("./routes/pokemonRoutes")(app);
require("./routes/queryRoutes")(app);


const port = 8000;

// allows us to take in data in json format
app.use(express.json(), express.urlencoded( {extended:true} ));

//cors
const cors = require('cors');
app.use(cors());

app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', 'http://example.com'); // Replace with your domain
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

//back ticks allows you to drop a variable into a string
app.listen( port, ()=>console.log(`Server up and running on ${port}`) );