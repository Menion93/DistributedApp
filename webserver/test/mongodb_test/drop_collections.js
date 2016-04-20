/**
 * Created by Andrea on 19/04/2016.
 */

facade = require('./template_test').facade

facade.removeAllIngredients()
facade.removeAllPizzas()
facade.findAllIngredients(function(err,result){
    if(err)
        return console.log(err)
    console.log(result)
})

facade.findAllPizzas(function(err,result){
    if(err)
        return console.log(err)
    console.log(result)
})