module.exports = mongoose => {
    var schema = mongoose.Schema(
      {
        quartier: String,
        ville: String,
        pays: String,
        numeroVilla: String,
        personnes: 
            {
              required: true,
              type: mongoose.Schema.Types.ObjectId,
              ref: "Personne"
            }
      },
      { timestamps: true }
    );
  
    schema.method("toJSON", function() {
      const { __v, _id, ...object } = this.toObject();
      object.id = _id;
      return object;
    })
  
    return mongoose.model("adresse", schema)
  }