const express = require('express')

// i forgot to call the function here
// TypeError: Cannot read properties of undefined (reading 'push')
// at Function.route, (C:\Users\Camwo\sei-classwork\fullstack-capstone\capstone-backend\node_modules\express\lib\router\index.js:513:14)
const router = express.Router()

const {index, create, destroy} = require('../controllers/personalities')


// http://localhost:8000/personalities

// Getting all personalities
router.get("/", index)


// Create a new personality
router.post("/", create)

// Delete a personality
// :id Route param
router.delete("/:id", destroy)







module.exports= router