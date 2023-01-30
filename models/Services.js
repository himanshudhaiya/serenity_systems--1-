const mongoose = require("mongoose");

const ServiceSchema = new mongoose.Schema({
    image: {
        type: String,
        require: true
    },
    category: {
        type: String,
        require: true
    },
    description: {
        type: String,
        require: true
    },
    short_description: {
        type: String,
        require: true
    },
    created_at: {
        type: String,
        default: Date.now
    },
    updated_at: {
        type: String,
        default: Date.now
    }
})

module.exports = mongoose.model("Service", ServiceSchema)