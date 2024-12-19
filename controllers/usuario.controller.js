const Usuario = require('../models/usuario.model');


module.exports.createUsuario = (request, response) => {
    const { email, password } = request.body;
    Usuario.create({
        email, password
    })
        .then(usuario => response.status(200).json({email:usuario.email}))
        .catch(err => response.status(400).json(err));
}


module.exports.getUsuario = (request, response) => {
    const { email, password } = request.body;

    Usuario.findOne({ email: email, password: password })
        .then(usuario => {
            if (usuario) {
                // Retorna únicamente el email si las credenciales son correctas
                response.status(200).json({
                    email: usuario.email
                });
            } else {
                response.status(401).json({ // Código 401 para credenciales inválidas
                    message: 'Invalid email or password'
                });
            }
        })
        .catch(err => response.status(500).json({
            message: 'Internal server error',
            error: err
        }));
};
