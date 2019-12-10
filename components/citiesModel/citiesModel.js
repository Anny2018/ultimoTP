const mongoose = require('mongoose');

const citySchema = mongoose.Schema({
    name: String,
    country: String,
    itineraris: [{
        type: mongoose.Types.ObjectId,
        ref: 'iteneraris'
    }]
});

module.exports = mongoose.model('cities', citySchema)