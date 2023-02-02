const express = require('express');
const route = express.Router();
const homeController = require('./src/controllers/homeController');
route.get('/', homeController.homePage);
route.post('/', homeController.post);
module.exports = route;