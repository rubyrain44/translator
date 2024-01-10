const translateController = require("../controllers/translateController");

module.exports = app => {

    app.get("/api/translate", translateController.findAll);
    app.post("/api/translate", translateController.create);

}