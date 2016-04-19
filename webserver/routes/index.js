var express = require('express');
var controller = require('../controller/controller');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/ingredients', controller.getIngredients);

router.get('/pizzas', controller.getPizzas);

router.get('/newIngredient', controller.createIngredient);

router.get('/newPizza', controller.createPizza);

router.post('/save_ingredient', controller.showSavedIngredient);

router.post('/save_pizza', controller.showSavedPizza);


module.exports = router;
