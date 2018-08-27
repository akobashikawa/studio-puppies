const mongoose = require('mongoose');

const PuppySchema = new mongoose.Schema({
    name: String,
    breed: String,
    age: Number,
    sex: String
});

module.exports = mongoose.model('Puppy', PuppySchema);