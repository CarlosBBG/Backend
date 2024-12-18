const { type } = require('express/lib/response');
const mongoose = require('mongoose');

const UsuarioSchema = new mongoose.Schema ({
    email: {
        type: String,
        required: [true, "El correo es requerido"]
    },
    password: {
        type: String,
        required: [true, "El password es requerido"]
    }
}, {
    collection: 'Usuarios'
}
);

const Usuario = mongoose.model('Usuario', UsuarioSchema);

module.exports = Usuario;