const RestauranteController = require('../controllers/restaurante.controller');
const { protect, admin,admin2 } = require('../middlewares/protect')

module.exports = function (app) {
    app.post('/restaurantes', admin, RestauranteController.createRestaurante);
    app.get('/restaurantes', protect, RestauranteController.getAllRestaurantes);
    app.get('/restaurantes/:id', RestauranteController.getRestaurante);
    app.put('/restaurantes/:id', admin, RestauranteController.updateRestaurante);
    app.delete('/restaurantes/:id', admin, RestauranteController.deleteRestaurante);
}

