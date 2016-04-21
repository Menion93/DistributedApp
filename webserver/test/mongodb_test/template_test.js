/**
 * Created by Andrea on 20/04/2016.
 */


var mongoose = require('mongoose');
var facade = require('.././DbRepository');

mongoose.connect('mongodb://localhost/TestPizzeDB');

module.exports = {facade:facade}