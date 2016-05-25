var express = require('express');
var repository = require('../repository/DbRepository');
var router = express.Router();

// GET METHODS

//Get all the ingredient
router.get('/all', function(req, res, next) {
  repository.findAllIngredients(function(result){
    res.json(result);
  });
});

// Get an ingredient
router.get('/findbyname/:name', function(req, res, next) {
  repository.findIngredient(req.params.name, function(result){
    res.json(result);
  })
});

// PUT METHODS

//Update an ingredient
router.put('/updatebyname/:name/:new', function(req, res, next) {
  repository.updateIngredient(req.params.name, req.params.new, function(message){
    res.json(message);
  })
});

// POST METHODS

//Add an Ingredient
router.post('/addbyname/:name', function(req, res, next) {
  repository.addIngredient(req.params.name, function(message){
    res.json(message);
  })
});

// DELETE METHODS

//Delete an Ingredient
router.delete('/remove/:name', function(req, res, next) {
  repository.removeIngredient(req.params.name, function(message){
    res.json(message);
  })
});



module.exports = router;
