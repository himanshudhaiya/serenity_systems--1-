const mongoose = require('mongoose');

const FooterSchema = new mongoose.Schema({
    about: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    mobile: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    twitter: {
        type: String,
        required: true
    },
    facebook: {
        type: String,
        required: true
    },
    linkedin: {
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
    }
});

module.exports = mongoose.model('Footer', FooterSchema);