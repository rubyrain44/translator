//bring in controller
const pokemonController = require("../controllers/pokemonController");

module.exports = app => {
    //tells you the request it's taking in, what the url will look like, and the function you want to run when the route is pinged
    app.get("/api/pokemon", pokemonController.findAll);
    // app.get("/api/pokemon/:id", pokemonController.findOne);
    // app.post("/api/pokemon", pokemonController.create);
    // app.put("api/pokemon/:id", pokemonController.update);
    // app.delete("/api/pokemon/:id", pokemonController.delete);
}