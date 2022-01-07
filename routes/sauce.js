const express = require('express');
const { route } = require('./user');
const router = express.Router();
const Sauce = require('../models/sauce');

router.post('/', (req, res, next) => {
    const sauce = new Sauce({
      ...req.body
    });
    sauce.save()
    .then(() => res.status(201).json({message: 'sauce cree'}))
    .catch(error => res.status(400).json({ error }));
  });

  router.get('/:id', (req, res, next) => {
    Sauce.findOne({_id: req.params.id })
    .then(sauce => res.status(200).json(sauce))
    .catch(error => res.status(404).json({ error }));
  })

  router.get('/', (req, res, next) => {
    Sauce.find()
    .then(sauces => res.status(200).json(sauces))
    .catch(error => res.status(400).json({ error }));
  });

  module.exports = router;