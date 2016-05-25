var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create an export function to encapsulate the model creation
module.exports = function() {
    // define schema
    var IngredientSchema = new Schema({
        name: String
    });
    mongoose.model('Ingredient', IngredientSchema);
};
