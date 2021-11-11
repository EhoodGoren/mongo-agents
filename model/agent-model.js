const mongoose = require('mongoose');

const agentSchema = new mongoose.Schema(
    {
        license_number: {
            type: Number,
            required: true
        },
        name: {
            type: String,
            required: true
        },
        city: {
            type: String,
            required: true
        }
    }  
);

module.exports = mongoose.model("Agent", agentSchema);

