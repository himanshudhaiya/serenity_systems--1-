const mongoose = require("mongoose");

const SliderSchema = new mongoose.Schema({
    image: {
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
    },
})

module.exports = mongoose.model("Slider", SliderSchema)