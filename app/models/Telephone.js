module.exports = mongoose => {
    var schema = mongoose.Schema(
      {
        numero: {
            type: Number,
            unique: true // `numero telephone` must be unique
          },
          personnes:
            {
             
              required: true,
              type: mongoose.Schema.Types.ObjectId,
              ref: "Personne"
            }
         ,
        
        
        
      },
      { timestamps: true }
    );
  
    schema.method("toJSON", function() {
      const { __v, _id, ...object } = this.toObject();
      object.id = _id;
      return object;
    });
  
    const Telephone = mongoose.model("telephone", schema);
    return Telephone;
  };