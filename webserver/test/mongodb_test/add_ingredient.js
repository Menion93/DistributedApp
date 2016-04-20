/**
 * Created by Andrea on 19/04/2016.
 */

facade = require('./template_test').facade

//TEST 1
//Add an ingredient
facade.addIngredient("pomodoro", "it's so red", function(err){
    console.log(err)
    facade.addIngredient("pomodoro", "it's another pomodoro", function(err){
        facade.findAllIngredients(function(results){
            console.log(results)
            console.log(results.length)
        });
    })
})


