const mongoose = require("mongoose")

const logoschema = new mongoose.Schema({
    logo: {
        type: String,
        required: true
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
module.exports = mongoose.model("Logo", logoschema)