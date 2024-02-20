const express = require('express');
const router = express.Router();
const { infjIndex, infjCreate, infjDestroy, infjUpdate } = require('../controllers/personalities');

// Routes for INFJ collection
router.get("/", infjIndex);         // Getting all INFJs
router.post("/", infjCreate);       // Create a new INFJ
router.patch("/:id", infjUpdate);   // Update an INFJ
router.delete("/:id", infjDestroy); // Delete an INFJ


// http://localhost:8000/infj  POST and GET
// // http://localhost:8000/infj/651305310 delete Works
// http://localhost:8000/infj/65d52d4c3301ea445a979a8b Patch Works 


// getting this error for Post after one is initially created ??{
//     "err": "Bad Request",
//     "message": "E11000 duplicate key error collection: Equanimity.infjs index: type_1 dup key: { type: null }"
// }
// http://localhost:8000/infj/65a39ag93910  UPDATE and DELETE
module.exports = router;