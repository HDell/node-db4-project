//set up
const express = require('express');
const server = express();
//router
const recipeRouter = require('./recipes/recipe-router');
//middleware
server.use(express.json());
server.use('/api/recipes', recipeRouter);
//export
module.exports = server;