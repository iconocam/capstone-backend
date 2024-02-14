// Requiring and configuring the .env file to access its variables 
require("dotenv").config()
// Requiring express
const express = require('express')
// Creating the express server and storing inside the app variable
const app = express()
// Port in which the server will run on 
const PORT = process.env.PORT || 8000
// const cors = require('cors')
const personalityRouter = require('./routes/personalities')
// Configuring the server to accept and parse JSON data.

app.use(express.json())
// app.use(cors());


// Routes;
// http://localhost:8000/personalities

// /personalities
app.use("/personalities", personalityRouter)






// Calling the listen function telling the server to listen on port 8000
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`)
})