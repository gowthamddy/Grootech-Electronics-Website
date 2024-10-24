const mongoose = require('mongoose');
const ContactSchema = new mongoose.Schema(
    {
      Email: {
        type: String,

      },
      subject: {
        type: String,
      },
      message: {
        type: String,
      }
    },
    { timestamps: true }
  );
  
  module.exports = mongoose.model("Contact", ContactSchema);