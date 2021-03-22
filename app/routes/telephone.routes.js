module.exports = app => {
    const telephones = require("../controllers/telephone.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Adresse
    router.post("/", telephones.create);
  
    app.use('/api/telephones', router);
  };