const mongoos = require('mongoose');

const OurteamSchema = new mongoos.Schema({
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
    facebook_url: {
        type: String,
        required: true
    },
    twitter_url: {
        type: String,
        required: true
    },
    linkedin_url: {
        type: String,
        required: true
    },
    created_at: {
        type: String,
        default: Date.now
    },
})

module.exports = mongoos.model('Ourteam', OurteamSchema);