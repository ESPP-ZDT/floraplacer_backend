const mongoose = require('mongoose');


const FloraSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    lat: {
        type: Number,
        required: true
    },
    lng: {
        type: Number,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    species: {
        type: String,
        required: true
    },
    addedBy: {
        type: String,
    }
}, {
    timestamps: true
    
});
const Flora = mongoose.model('Flora', FloraSchema,);

module.exports = Flora
