const db = require("../models");
const Telephone = db.telephones;

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
    if (!req.body.numero) {
      res.status(400).send({ message: "Content can not be empty!" });
      return;
    }
  
    // Create an Contact
    const telephone = new Telephone({
      numero: req.body.numero,
      personnes: req.body.personnes
     
    });
  
    // Save Contact in the database
    telephone
      .save(telephone)
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

  