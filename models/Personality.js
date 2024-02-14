// Exporting schema and model from mongoose
const {Schema, model} = require('../config/db-connection')

const personalitySchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    description: {
        type: String,
        required: true,
    },
    link: {
        type: String,
        required: true,
        unique: true
    },
    

}, {
    timestamps: true,
}

)

module.exports = model("Personality", personalitySchema)