const dbConfig = require("../config/db.config.js");

const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;
db.url = dbConfig.url;
db.personnes = require("./Personne.js")(mongoose);
db.adresses = require("./Adresse.js")(mongoose);
db.telephones = require("./Telephone.js")(mongoose);

module.exports = db;