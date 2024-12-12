const { type } = require('express/lib/response');
const mongoose = require('mongoose');

const RestauranteSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: [
            true,
            "El nombre es requirido"
        ]
    },

    tipo: {
        type: String,
        required: [
            true,
            "El tipo es requerido"
        ]
    },

    horario: {
        type: String,
        required: [
            true,
            "El horario es requirido"
        ]
    },

    imagen: {
        type: String,
        required: [
            true,
            "La imagen es requirido"
        ]
    },

    reputacion: {
        type: Number,
        required: [
            true,
            "La reputación es requirida"
        ]
    }

});

const Restaurante = mongoose.model('Restaurante', RestauranteSchema);

module.exports = Restaurante;