const routes = require('express').Router();
const lesson1Controller = require('../controllers/lesson1');

routes.get('/', lesson1Controller.johnathonRoute);
routes.get('/angela', lesson1Controller.angelaRoute);

module.exports = routes;