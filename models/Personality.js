// Exporting schema and model from mongoose
const {Schema, model} = require('../config/db-connection')

const personalitySchema = new Schema({
    name: {
        type: String,
        required: true,
        
    },
    description: {
        type: String,
        
    },
    link: {
        type: String,
        required: true,
        
    },
    

}, {
    timestamps: true,
}

)


const infjSchema = new Schema({
    Type: {
        type: String,
        required: true
    },
    Source: {
        type: String,
        required: true
    },
    
    

}, 
)

module.exports = {
    Personality: model("Personality", personalitySchema),
    INFJ: model("INFJ", infjSchema)
}