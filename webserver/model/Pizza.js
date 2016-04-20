/**
 * Created by Andrea on 19/04/2016.
 */

// import the necessary modules
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create an export function to encapsulate the model creation
module.exports = function() {
    // define schema
    var PizzaSchema = new Schema({
        name: String,
        description: String,
        base: String,
        _ingredients: [{type:'ObjectId', ref:'Ingredient'}]
        //Maybe add something else

    });
    mongoose.model('Pizza', PizzaSchema);
};
