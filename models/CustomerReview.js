const mongoose = require("mongoose");

const CustomerReviewSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    designation: {
        type: String,
        required: true

    },
    description: {
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
})

module.exports = mongoose.model("CustomerReview", CustomerReviewSchema);