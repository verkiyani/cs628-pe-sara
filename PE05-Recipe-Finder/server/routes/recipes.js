const express = require('express');
const Recipe = require('../models/Recipe');

const router = express.Router();


router.get('/', async (req, res) => {
    const recipes = await Recipe.find();
    res.json(recipes);
});


router.get('/:id', async (req, res) => {
    const recipe = await Recipe.findById(req.params.id);
    res.json(recipe);
});


router.post('/', async (req, res) => {
    const newRecipe = new Recipe(req.body);
    await newRecipe.save();
    res.json(newRecipe);
});


router.put('/:id', async (req, res) => {
    const updatedRecipe = await Recipe.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedRecipe);
});


router.delete('/:id', async (req, res) => {
    await Recipe.findByIdAndDelete(req.params.id);
    res.json({ message: "Recipe deleted" });
});

module.exports = router;
