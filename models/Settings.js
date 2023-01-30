const mongoose = require("mongoose")

const SattingSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    service_text: {
        type: String,
        required: true
    },
    service_title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    created_at: {
        type: String,
        default: Date.new
    },
    update_at: {
        type: String,
        default: Date.new
    }
})

module.exports = mongoose.model("Setting", SattingSchema)