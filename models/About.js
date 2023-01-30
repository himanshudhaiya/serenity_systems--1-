const mongoose = require("mongoose")

const aboutSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    updates_at: {
        type: Date,
        default: Date.now
    },
    date: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model("About", aboutSchema)