module.exports = mongoose => {
    var schema = mongoose.Schema(
      {
        prenom: String,
        nom: String,
        age:String,
        nationalite:String,
        sexe:String,
         
      },
      { timestamps: true }
    );
  
    schema.method("toJSON", function() {
      const { __v, _id, ...object } = this.toObject();
      object.id = _id;
      return object;
    });
  
    const Personne = mongoose.model("personne", schema);
    return Personne;
  };