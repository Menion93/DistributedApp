/**
 * Created by Andrea on 20/04/2016.
 */

facade = require('./template_test').facade

facade.findAllPizzas(function(result){
    console.log(result);
})