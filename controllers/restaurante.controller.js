const Restaurante = require('../models/restaurante.model');

//El controlador es una función que acepta 2 parámetros de entrada --> req y res

module.exports.createRestaurante = (request, response) => {
    const { nombre, tipo, horario, imagen, reputacion } = request.body;
    Restaurante.create({
        nombre, tipo, horario, imagen, reputacion
    })
        .then(restaurante => response.status(200).json(restaurante))
        .catch(err => response.status(400).json(err));
}

module.exports.getAllRestaurantes = (_, response) => {
    Restaurante.find({})
        .then(restaurantes => response.status(200).json(restaurantes))
        .catch(err => response.json.status(500).json(err))
}

module.exports.getRestaurante = (request, response) => {
    Restaurante.findOne({_id: request.params.id})
        .then(restaurante => response.status(200).json(restaurante))
        .catch(err => response.status(500).json(err))
}

//new true devuelve los valores actualizados, en falso retorna los valores anteriores 

module.exports.updateRestaurante = (request, response) => {
    Restaurante.findOneAndUpdate({_id: request.params.id}, request.body, {new: true})
        .then(updateRestaurante => response.status(200).json(updateRestaurante))
        .catch(err => response.status(500).json(err))
}

module.exports.deleteRestaurante = (request, response) => {
    Restaurante.findOneAndDelete({_id: request.params.id})
        .then(restauranteDeleted => response.status(200).json(restauranteDeleted))
        .catch(err => response.status(500).json(err))
}
