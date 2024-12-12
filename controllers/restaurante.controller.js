const Restaurante = require('../models/restaurante.model');

module.exports.createRestaurante = (request, response) => {
    const { nombre, tipo, horario, imagen, reputacion } = request.body;
    Restaurante.create({
        nombre, tipo, horario, imagen, reputacion
    })
        .then(restaurante => response.status(200).json(restaurante))
        .catch(err => response.status(400).json(err));
}
