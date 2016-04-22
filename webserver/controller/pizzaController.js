var repository = require('../repository/DbRepository');

var pizzaController = {
    getPizzas: function(req, res) {
        repository.findAllPizzas(function(result){
            res.render('pizzas.jade', {pizzaList : result} );
        });
    },
    formNewPizza: function(req, res) {
        repository.findAllIngredients(function(result){
            res.render('newPizza.jade', {ingredientList : result});
        });
    },
    createPizza: function(req, res) {
        var idList=[];                                      //ID list of selected ingredients
        var length= req.body.ingredients.length;
        for (var i=0; i<length; i++){
            idList.push(req.body.ingredients[i]);
        }

        repository.addPizza(req.body.name, req.body.description, req.body.base, idList, function(err){
            if(err){
                return res.render('persistenceError.jade', {'message' : err});
            }
            repository.findPizza(req.body.name, function(result){
                res.render('savedPizza.jade', {pizza: result});
            });
        });
    }
}


module.exports = pizzaController;