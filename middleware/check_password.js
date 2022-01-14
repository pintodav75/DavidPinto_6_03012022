const passwordSchema = require('../models/password');

module.exports = (req, res, next) => {
    if (!passwordSchema.validate(req.body.password)) {
        res.status(400).json({ message: 'Le MDP doit au moins contenir 8 caracteres, 1 MAJ, 1Min, 1 chiffre.' });
    } else {
        next();
    }
};