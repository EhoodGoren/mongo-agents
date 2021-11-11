const mongoose = require('mongoose');

const agentSchema = new mongoose.Schema(
    {
        license_number: {
            type: Number,
            required: true
        },
        name: {
            type: string,
            required: true
        },
        city: {
            type: string,
            required: true
        }
    }  
);

module.exports = mongoose.model("Agent", personSchema);

