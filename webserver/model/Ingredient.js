/**
 * Created by Andrea on 19/04/2016.
 */

// import the necessary modules
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create an export function to encapsulate the model creation
module.exports = function() {
    // define schema
    var IngredientSchema = new Schema({
        name: String,
        description: String
        // Add an image
    });
    mongoose.model('Ingredient', IngredientSchema);
};
