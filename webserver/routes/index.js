var express = require('express');
var ingredientController = require('../controller/ingredientController');
var pizzaController = require('../controller/pizzaController');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/ingredients', ingredientController.getIngredients);

router.get('/newIngredient', ingredientController.formNewIngredient);

router.post('/save_ingredient', ingredientController.createIngredient);

router.get('/ingredientDetails', ingredientController.getIngredientDetails);

router.get('/pizzas', pizzaController.getPizzas);

router.get('/newPizza', pizzaController.formNewPizza);

router.post('/save_pizza', pizzaController.createPizza);


module.exports = router;