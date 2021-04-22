const db = require('../models');

exports.findAllUsers = async (req, res, next) => {
    try {
        const registro = await db.users.findAll({include:'tutoriales'})
        res.json(registro);
    } catch (err) {
        next(err);
    }
}

exports.findAllTutorials = async (req, res, next) => {
    try {
        const registro = await db.tutoriales.findAll({include:'user'})
        res.json(registro);
    } catch (err) {
        next(err);
    }
}

exports.createTutorial = async (req, res, next) => {
    try {
        const { title, description, published, userId } = req.body;
        const registro = await db.tutoriales.create({title,description,published,userId})
        res.json(registro);
    } catch (err) {
        next(err);
    }
}