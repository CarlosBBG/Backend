const RestauranteController = require('../controllers/restaurante.controller');

module.exports = function (app) {
    app.post('/restaurantes', RestauranteController.createRestaurante);
}