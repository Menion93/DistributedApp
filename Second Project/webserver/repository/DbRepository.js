require('../model/Ingredient')()

var INGREDIENT_NAME_ERROR = 'The ingredient is already present!'

var mongoose = require('mongoose');
var Ingredient = mongoose.model('Ingredient');

module.exports = {

    findAllIngredients : function(callback){
        Ingredient.find({}, function(err, result){
            if(err)
                return callback({'status':err})
            callback(result)
        })
    },

    // Needed only for testing
    removeAllIngredients : function(callback){
        Ingredient.remove({}, function(err,removed){
            if(err)
                return callback({'status':err})
            if(callback)
                callback()
        })
    },

    findIngredient : function(name, callback){
        Ingredient
            .findOne({ 'name': name })
            .exec(function (err, result) {
                if (err)
                    return callback({'status':err});
                callback(result)
            });
    },

    addIngredient : function(name, callback){
        Ingredient.findOne({'name':name}, function(err,result){
            if(err)
                return callback({'status':err})
            if(result)
                return callback({'status':INGREDIENT_NAME_ERROR})
            var ingredient = new Ingredient({'name':name});
            ingredient.save(function(err){
                if(err)
                    return callback({'status':err});
                callback({'status':'added'})
            })
        })
    },

    removeIngredient : function(name,callback){
        Ingredient.remove({name:name}, function(err){
            if(err)
                return callback({'status':err});
            callback({'status':'removed'})
        })
    },

    updateIngredient : function(name, new_name, callback){
        Ingredient.findOne({'name':name}, function(err, result){
            if(err)
                return callback({'status':err});
            result.name = new_name;
            result.save(function(err){
                if(err)
                    return callback({'status':err})
                return callback({'status':'updated'})
            })
        })
    }
    

}
