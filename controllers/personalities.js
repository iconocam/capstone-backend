// Need the model to interact with the database, 
// Bringing the model from models file 
const {Personality, INFJ} = require('../models/Personality')

// index route
// Async operations pertaining to our DB and inside this controller is where we insert the request, and response 

// async func. for index operation finding personalities and if personalities is found send personalities with a 200 response or send 400 response and err

// refactored to personalities.length > 0 to check if the documents are greather than zero and if it is not greater it returns 'No personalities found' as oppose to the find method returning an empty array irregardless of how many documents there are

// logic for getting personalities
// For Async processes best practice is to try/catch

async function index (req, res) {
try{
    const personalities = await Personality.find({})
    if (personalities.length > 0) {
        res.status(200).send(personalities);
    } else {
        res.status(404).send({ message: 'No personalities found.' });}
    } catch (err) {
        res.status(400).json({err: 'Bad Request', message: err.message})
    }
}

// create route
// logic for POST method
// getting the body of req object, if personality is created return otherwise error
// changed to newPersonality for accuracy

async function create (req, res) {
try{
    const newPersonality = await Personality.create(req.body)
    if (newPersonality) {
        res.status(201).send(newPersonality)}
    } catch(err){
    res.status(400).json({err: 'Bad Request', message: err.message})
    }
}

// Delete route
// logic for DELETE method
// deletedPersonality var , querying our database to findByIdAndDelete from the req input, and if personality deleted, send it back

//instead of using findByIdAndDelete, refactored to findById so we can retrieve the personality before attempting deletion.
    async function destroy(req, res) {
    try {
        const personality = await Personality.findById(req.params.id);

    if (!personality) {
        return res.status(404).json({ message: 'Personality not found.' });
    }
        const deletedPersonality = await personality.delete();
    res.status(200).send(deletedPersonality);
    } catch (err) {
    res.status(400).json({ error: 'Bad Request', message: err.message });
    }
}

// PATCH/UPDATE route
// querying database to findByIdAndUpdate whatever is in the req.body and req.params.id that was specified, runValidators compares our schema against the newPersonality 
// if personality was not updated 404 error, otherwise send updatedPersonality 
async function update(req, res) {
    try {
    const updatedPersonality = await Personality.findByIdAndUpdate(
        req.params.id,
        req.body,
        { runValidators: true }
    );

    if (!updatedPersonality) {
        res.status(404).json({ message: 'Personality Not Found' });
    }

    res.status(200).send(updatedPersonality);
    } catch (err) {
    res.status(400).json({ error: 'Bad Request', message: err.message });
    }
}


// INFJ Collection CRUD operations


async function infjIndex(req, res) {
    try {
    const infjs = await INFJ.find({});
    console.log(infjs)
    // if (infjs.length > 0) {
        res.status(200).json(infjs); //ensure JSON response
    // } else {
    //     res.status(404).json({ message: 'No INFJs found.' });
    // }
    } catch (err) {
    res.status(400).json({ err: 'Bad Request', message: err.message });
    }
}

async function infjCreate(req, res) {
    try {
    const newINFJ = await INFJ.create(req.body);
    if (newINFJ) {
        res.status(201).json(newINFJ);
    }
    } catch (err) {
    res.status(400).json({ err: 'Bad Request', message: err.message });
    }
}


async function infjDestroy(req, res) {
    try {
    const infj = await INFJ.findById(req.params.id);

    if (!infj) {
        return res.status(404).json({ message: 'INFJ not found.' });
    }

    const deletedINFJ = await infj.delete();
    res.status(200).json(deletedINFJ);
    } catch (err) {
    res.status(400).json({ error: 'Bad Request', message: err.message });
    }
}

async function infjUpdate(req, res) {
    try {
    const updatedINFJ = await INFJ.findByIdAndUpdate(
        req.params.id,
        req.body,
        { runValidators: true }
    );

    if (!updatedINFJ) {
        res.status(404).json({ message: 'INFJ Not Found' });
    }

    res.status(200).json(updatedINFJ);
    } catch (err) {
    res.status(400).json({ error: 'Bad Request', message: err.message });
    }
}
module.exports = {index, create, destroy, update, infjIndex, infjCreate, infjDestroy, infjUpdate }