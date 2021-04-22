const db = require('../models');

exports.findAllUsers = async (req, res, next) => {
    try {
        const registro3 = await db.users.findAll({include:'tutoriales'})
        res.json(registro3);
    } catch (err) {
        next(err);
    }
}

exports.findAllTutorials = async (req, res, next) => {
    try {
        const registro3 = await db.tutoriales.findAll({include:'user'})
        res.json(registro3);
    } catch (err) {
        next(err);
    }
}

exports.createTutorial = async (req, res, next) => {
    try {
        const { title, description, published, userId } = req.body;
        const registro3 = await db.tutoriales.create({title,description,published,userId})
        res.json(registro3);
    } catch (err) {
        next(err);
    }
}