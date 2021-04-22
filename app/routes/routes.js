module.exports = app => {

    const Controller = require('../controllers/controllers');
    const router = require('express').Router();

    router.get('/test', (req, res) => res.send('ok'));

    router.get('/user', Controller.findAllUsers);
    app.use('/api', router);

    router.get('/tutoriales', Controller.findAllTutorials);
    router.post('/create',Controller.createTutorial)

    app.use('/api', router);

};