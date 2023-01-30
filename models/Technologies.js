const mongoose = require('mongoose');

const TechnologiesSchema = new mongoose.Schema({
    category: {
        type: String,
        required: true
    },
    icon: {
        type: String,
        required: true
    },
    text: {
        type: String,
        required: true
    },
    created_at: {
        type: String,
        default: Date.now
    },
    updated_at: {
        type: String,
        default: Date.now
    },
})

module.exports = mongoose.model('Technologies', TechnologiesSchema);