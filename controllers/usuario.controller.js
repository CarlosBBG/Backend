const Usuario = require('../models/usuario.model');


module.exports.createUsuario = (request, response) => {
    const { email, password } = request.body;
    Usuario.create({
        email, password
    })
        .then(usuario => response.status(200).json(usuario.email))
        .catch(err => response.status(400).json(err));
}

module.exports.getUsuario = (request, response) => {
    const { email, password } = request.body;
    Restaurante.findOne({email: email, })
        .then(restaurante => response.status(200).json(restaurante))
        .catch(err => response.status(500).json(err))
}
