module.exports = app => {
    const adresses = require("../controllers/adresse.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Adresse
    router.post("/", adresses.create);
  
    app.use('/api/adresses', router);
  };