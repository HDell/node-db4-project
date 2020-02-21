//set up
const express = require('express');
//routes
const router = express.Router();
//model import
const RecipesModel = require('./recipe-model.js');
//CRUD
router.get('/', (req, res) => {
    RecipesModel.getRecipes().then(response => {
        res.status(200).json(response);
    }).catch(err => {
        console.log(err);
        res.status(500).json({err: "Sorry. The server experienced an error."});
    });
});
router.get('/:id/shoppingList', (req, res) => {
    const {id} = req.params;
    RecipesModel.getShoppingList(id).then(response => {
        if (response) {
            res.status(200).json(response);
        } else {
            res.status(404).json({err: "The recipe with the specified ID does not exist."})
        }
    }).catch(err => {
        console.log(err);
        res.status(500).json({err: "Sorry. The server experienced an error."});
    });
});
router.get('/:id/instructions', (req, res) => {
    const {id} = req.params;
    RecipesModel.getInstructions(id).then(response => {
        if (response) {
            res.status(200).json(response);
        } else {
            res.status(404).json({err: "The recipe with the specified ID does not exist."})
        }
    }).catch(err => {
        console.log(err);
        res.status(500).json({err: "Sorry. The server experienced an error."});
    });
});
//export
module.exports = router;