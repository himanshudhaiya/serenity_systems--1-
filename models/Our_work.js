const mongoose = require("mongoose")

const schema = new mongoose.Schema({
    image: {
        type: String,
    },
    heading: {
        type: String,
    },
    paragraph: {
        type: String,
    },
    heading1: {
        type: String,
    },
    paragraph1: {
        type: String,
    },
    heading2: {
        type: String,
    },
    paragraph2: {
        type: String,
    },
    heading3: {
        type: String,
    },
    paragraph3: {
        type: String,
    },
    created_at: {
        type: String,
        default: Date.now
    },
    update_at: {
        type: String,
        default: Date.now
    }
})

module.exports = mongoose.model("Our_Work", schema)