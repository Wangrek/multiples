'use strict'

var express = require('express');
var MultipleController = require('../controllers/multiple');

var api = express.Router();

api.get('/multiples', MultipleController.getData);


module.exports = api;