const express = require('express')

// i forgot to call the function here
// TypeError: Cannot read properties of undefined (reading 'push')
// at Function.route, (C:\Users\Camwo\sei-classwork\fullstack-capstone\capstone-backend\node_modules\express\lib\router\index.js:513:14)
const router = express.Router()

const {index, create, destroy, update} = require('../controllers/personalities')

// Routes
router.get("/", index);       // Getting all personalities
router.post("/", create);      // Create a new personality
router.patch("/:id", update);  // Update a personality
router.delete("/:id", destroy); // Delete a personality

// GET all personalities
// http://localhost:8000/personalities

// UPDATE
// http://localhost:8000/personalities/65cd19aa70bc90094553a82f
// 65cd19aa70bc90094553a82f - Test ID(Deleted)

// CREATE personality 
// http://localhost:8000/personalities

// DELETE personality 
// http://localhost:8000/personalities/65cd19aa70bc90094553a82f 




module.exports= router