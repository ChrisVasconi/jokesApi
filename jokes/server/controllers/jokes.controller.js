const Jokes = require('../models/jokes.model');


//Get all
module.exports.findAllJokes = (req, res) => {
    Jokes.find(req.Jokes )
        .then(allDaJokes => res.json({ jokes: allDaJokes }))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}

//Get one
module.exports.findOneSingleJokes = (req, res) => {
    const idFromParams = req.params.id
    Jokes.findOne({ _id: req.params.id })
        .then(oneSingleJokes => res.json({ jokes: oneSingleJokes }))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}

//Create
module.exports.createNewJokes = (req, res) => {
    Jokes.create(req.body)
        .then(newlyCreatedJokes => res.json({ jokes: newlyCreatedJokes }))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}

//Udate
module.exports.updateExistingJokes = (req, res) => {
    const idFromParams = req.params.id
    const updatedJokes = req.body
    Jokes.findOneAndUpdate(
        { _id: req.params.id },
        updatedJokes,
        { new: true, runValidators: true }
    )
        .then(updatedJokes => res.json({ jokes: updatedJokes }))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}

//Delete
module.exports.deleteAnExistingJokes = (req, res) => {
    Jokes.deleteOne({ _id: req.params.id })
        .then(result => res.json({ result: result }))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}
