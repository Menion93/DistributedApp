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
        if(req.body.name=="" || req.body.name==undefined){
            return res.render('errorNameMissing.jade');
        }
        repository.addIngredient(req.body.name, req.body.description, function(err){
           if(err){
               return res.render('persistenceError.jade', {'message' : err});
           }
            repository.findIngredient(req.body.name, function(result){
               res.render('savedIngredient.jade', result);
           })
        });
    },
    getIngredientDetails: function(req,res){
        var nameIngredient = req.query.parameter;                        //parameter contains the name of ingredient
        repository.findIngredient(nameIngredient, function(result){
            res.render('ingredientDetails.jade', {ingredient: result});
        });
    }
}

module.exports = ingredientController;