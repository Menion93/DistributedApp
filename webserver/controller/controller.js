//Created by Miriana on 19/04/2016.

var controller = {
    getIngredients: function(req, res, next) {
        res.render('ingredients.jade');
    },
    getPizzas: function(req, res, next) {
        res.render('pizzas.jade');
    },
    createIngredient: function(req, res, next) {
        res.render('newIngredient.jade');
    },
    createPizza: function(req, res, next) {
        res.render('newPizza.jade');
    },
    showSavedIngredient: function(req, res, next) {
        res.render('savedIngredient.jade');                 //add second param is the ingredient object
                                                            // in order to show its attributes
    },
    showSavedPizza: function(req, res, next) {
        res.render('savedPizza.jade');                      //add second param is the ingredient object
                                                            // in order to show its attributes
    } 
}

module.exports = controller;
