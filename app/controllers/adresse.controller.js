const db = require("../models");
const Adresse = db.adresses;

// Create and Save a new Contact
exports.create = (req, res) => {
  
};

// Retrieve all Contacts from the database.
exports.findAll = (req, res) => {
  
};

// Find a single Contact with an id
exports.findOne = (req, res) => {
  
};

// Update a Contact by the id in the request
exports.update = (req, res) => {
  
};

// Delete a Contact with the specified id in the request
exports.delete = (req, res) => {
  
};

// Delete all Contacts from the database.
exports.deleteAll = (req, res) => {
  
};

// Find all published Contacts
exports.findAllPublished = (req, res) => {
  
};

exports.create = (req, res) => {
    // Validate request
    if (!req.body) {
      res.status(400).send({ message: "Content can not be empty!" });
      return;
    }
  
    // Create an Adresse
    const adresse = new Adresse({
      quartier: req.body.quartier,
      ville: req.body.ville,
      pays: req.body.pays,
      numeroVilla: req.body.numeroVilla,
      personnes: req.body.personnes
    });
  
    // Save Adresse in the database
    adresse
      .save(adresse)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the Tutorial."
        });
      });
  };

  