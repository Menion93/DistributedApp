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
        var idList;                                         //ID list of selected ingredients
        if(typeof(req.body.ingredients)=='string'){         //only a selected ingredient
            var idList = [req.body.ingredients]
        }
        else{
            var idList= req.body.ingredients;
        }

        /*VALIDATION*/
        //verify the presence of mandatory field name
        if(req.body.name=="" || req.body.name==undefined){
            return res.render('errorNameMissing.jade');
        }
        //verify the presence of selected ingredients
        if(Object.keys(req.body).length != 4){                      //there are no ingredients field
            return res.render('errorIngredientsMissing.jade');      //there are no ingredients selected
        }
        
        /*Save*/
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