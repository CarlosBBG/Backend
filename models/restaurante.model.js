const { type } = require('express/lib/response');
const mongoose = require('mongoose');

const RestauranteSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: [true, "El nombre es requerido"]
    },
    tipo: {
        type: String,
        required: [true, "El tipo es requerido"]
    },
    horario: {
        type: String,
        required: [true, "El horario es requerido"]
    },
    imagen: {
        type: String,
        required: [true, "La imagen es requerida"]
    },
    reputacion: {
        type: Number,
        required: [true, "La reputación es requerida"]
    }
}, {
    collection: 'Restaurantes' // Aquí defines el nombre exacto
});

const Restaurante = mongoose.model('Restaurante', RestauranteSchema);

module.exports = Restaurante;
