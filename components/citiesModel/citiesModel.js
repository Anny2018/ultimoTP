const mongoose = require('mongoose');

const citySchema = mongoose.Schema({
    name: String,
    country: String,
    
});

module.exports = mongoose.model('cities', citySchema)