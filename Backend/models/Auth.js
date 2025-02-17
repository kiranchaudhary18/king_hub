const mongoose = require('mongoose');

const authSchema = new mongoose.Schema({
    auth0Id: { type: String, required: true, unique: true }, // Ensure unique constraint
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    picture: String,
  });
  

const Auth = mongoose.model('Auth', authSchema);
module.exports = Auth;
