/**
 * Created by Andrea on 20/04/2016.
 */

facade = require('./template_test').facade

facade.addIngredient('pollo','alessandro',function(){
    facade.addIngredient('dorme','alessandro', function(){
        facade.findAllIngredients(function(result){
            var ids = []
            for(i=0; i<result.length; i++)
                ids.push(result[i]._id);
            facade.addPizza('alessandroPollo','alessnadro con il pollo', 'lul', ids, function(){
                facade.findPizza('alessandroPollo',function(result){
                    console.log(result);
                })
            })
        })
    })
})