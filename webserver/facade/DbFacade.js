/**
 * Created by Andrea on 19/04/2016.
 */

require('../model/Pizza')()
require('../model/Ingredient')()

var PIZZA_NAME_ERROR = 'The pizza is already present!'
var INGREDIENT_NAME_ERROR = 'The ingredient is already present!'

var mongoose = require('mongoose');
var Pizza = mongoose.model('Pizza');
var Ingredient = mongoose.model('Ingredient');

module.exports = {
    findAllPizzas : function(callback){
        Pizza.find({})
            .populate('_ingredients')
            .exec(function (err, result) {
                if (err)
                    return console.log(err);
                callback(result)
            });
    },

    // Needed only for testing
    removeAllPizzas : function(callback){
        Pizza.remove({}, function(err,removed){
            if(err)
                console.log(err);
            if(callback)
                callback()
        })
    },

    findAllIngredients : function(callback){
        Ingredient.find({}, function(err, result){
            if(err)
                return console.log(err)
            callback(result)
        })
    },

    // Needed only for testing
    removeAllIngredients : function(callback){
        Ingredient.remove({}, function(err,removed){
            if(err)
                console.log(err);
            if(callback)
                callback()
        })
    },

    findPizza : function(pizza, callback){
        Pizza
            .findOne({ 'name': pizza })
            .populate('_ingredients')
            .exec(function (err, result) {
                if (err) 
                    return console.log(err);
                callback(result)
            });
    },

    findIngredient : function(name, callback){
        Ingredient
            .findOne({ 'name': name })
            .populate('_pizzas')
            .exec(function (err, result) {
                if (err)
                    return console.log(err);
                callback(result)
            });
    },

    findPizzasFromIngredient : function(ingredient,callback){
        Ingredient
            .findOne({ 'name': name })
            .populate('_pizzas')
            .exec(function (err, result) {
                if (err)
                    return console.log(err);
                callback(result)
            });
    },

    addIngredient : function(name, description, callback){
        Ingredient.findOne({'name':name}, function(err,result){
            if(err)
                return callback(err)
            if(result)
                return callback(INGREDIENT_NAME_ERROR)
            var ingredient = new Ingredient({'name':name, 'description':description,
                '_pizzas':[]});
            ingredient.save(function(err){
                if(err)
                    return console.log(err);
                callback()
            })
        })
    },

    addPizza : function(name, description, base, ingredients, callback){
        Pizza.findOne({'name':name}, function(err,result){
            if(err)
                return callback(err)
            if(result)
                return callback(PIZZA_NAME_ERROR)

            var pizza = new Pizza({'name':name, 'description':description,
                'base':base, '_ingredients':ingredients})

            pizza.save(function(err){
                if(err)
                    return console.log(err)
                updateIngredients(ingredients, pizza._id);
                callback()
            })
        })
    }
}

function updateIngredients(ingredients, pizzaId){
    ingredients.forEach(function(entry){
        Ingredient.find({'_id':entry}, function(err,result){
            if(err)
                return console.log(err);
            result[0]._pizzas.push(pizzaId);
            result[0].save(function(err){
                if(err)
                    return console.log(err)
            })
        })
    })
}