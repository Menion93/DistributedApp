var repository = require('../repository/DbRepository');

var ingredientController = {
    getIngredients: function(req, res) {
        repository.findAllIngredients(function(result){
            res.render('ingredients.jade', {ingredientList : result});
        });
        
    },
    formNewIngredient: function(req, res) {
        res.render('newIngredient.jade');
    },
    createIngredient: function(req, res) {
        repository.addIngredient(req.body.name, req.body.description, function(err){
           if(err){
               return res.render('persistenceError.jade', {'message' : err});
           }
            repository.findIngredient(req.body.name, function(result){
               res.render('savedIngredient.jade', result);
           })
        });
    }
}

module.exports = ingredientController;