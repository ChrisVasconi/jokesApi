const JokesController = require('../controllers/jokes.controller');

module.exports = app => {


    app.get('/api/jokes', JokesController.findAllJokes);

    app.get('/api/jokes/:id', JokesController.findOneSingleJokes);
    
    app.post('/api/jokes', JokesController.createNewJokes);

    app.put('/api/jokes/:id', JokesController.updateExistingJokes);

    app.delete('/api/jokes/:id', JokesController.deleteAnExistingJokes);
}
