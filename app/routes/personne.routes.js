module.exports = app => {
    const personnes = require("../controllers/personne.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Adresse
    router.post("/", personnes.create);
  
    app.use('/api/personnes', router);
  };