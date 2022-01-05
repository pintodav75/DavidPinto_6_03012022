const express = require('express');
const { use } = require('express/lib/application');
const req = require('express/lib/request');
const res = require('express/lib/response');
const app = express();
const mongoose = require('mongoose');

/* ROUTES */
const userRoutes = require('./routes/user');

 /*connection base de donnees Mongodb */
mongoose.connect('mongodb+srv://dpinto75:qwerty93@cluster0.abjfj.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB reussi !'))
  .catch(() => console.log('Connexion à MongoDB echoue !'));

  app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
  });

  app.use(express.json());

  app.use('/api/auth', userRoutes);

  module.exports = app;