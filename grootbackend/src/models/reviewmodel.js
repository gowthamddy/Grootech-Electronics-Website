const mongoose = require('mongoose');
const reviewSchema = new mongoose.Schema(
    {
      Email: {
        type: String,

      },
      writereview: {
        type: String,
      }
     
    },
    { timestamps: true }
  )
  
  module.exports = mongoose.model("review",reviewSchema);