// Requiring and configuring the .env file to access its variables 
require("dotenv").config()
// Requiring express
const express = require('express')
// Creating the express server and storing inside the app variable
const app = express()
// Port in which the server will run on 
const PORT = process.env.PORT || 8000
// ENABLE Cors in BACKEND server!*
const cors = require('cors')

const personalityRouter = require('./routes/personalities')
const infjRouter = require('./routes/infjRoutes')
// Configuring the server to accept and parse JSON data.
app.use(express.json())

// ENABLE Cors in BACKEND server!*
app.use(cors());


// /personalities
app.use("/personalities", personalityRouter)

// infj
app.use("/infj", infjRouter);



// Calling the listen function telling the server to listen on port 8000
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`)
})