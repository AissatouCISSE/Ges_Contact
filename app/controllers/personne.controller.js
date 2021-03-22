const db = require("../models");
const Personne = db.personnes;

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
    if (!req.body.nom) {
      res.status(400).send({ message: "Content can not be empty!" });
      return;
    }
  
    // Create a Personne
    const personne = new Personne({
      prenom: req.body.prenom,
      nom: req.body.nom,
      age:req.body.age,
      nationalite:req.body.nationalite,
      sexe:req.body.sexe,
      
    });
  
    // Save Personne in the database
    personne
      .save(personne)
      .then(data => {
        res.status(200).send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the Personne."
        });
      });
  };

  