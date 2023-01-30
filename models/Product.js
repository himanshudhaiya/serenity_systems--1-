const mongoose = require("mongoose")

const Schema = new mongoose.Schema({
    image1: {
        type: String,
    },
    image2: {
        type: String,
    },
    image3: {
        type: String,
    },
    image4: {
        type: String,
    }

})

module.exports = mongoose.model("Product", Schema)