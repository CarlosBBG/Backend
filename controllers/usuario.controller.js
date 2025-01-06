const Usuario = require('../models/usuario.model');
require("dotenv").config();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const generateToken = (id) => {
    return jwt.sign({ id }, "password", { expiresIn: '30d' })
}

module.exports.createUsuario = async (request, response) => {
    const { email, password } = request.body;
    if (!email || !password) {
        response.status(400).json({ message: 'Missing fields, all are mandatory!' });
    } else {
        const userFound = await Usuario.findOne({ email });
        if (userFound) {
            response.status(400).json({ message: 'User already exist' });
        } else {
            const salt = await bcrypt.genSalt(10);
            const hashedPassword = await bcrypt.hash(password, salt);
            Usuario.create({
                email, password: hashedPassword
            })
                .then(usuario => response.status(200).json({ email: usuario.email, _id: usuario._id, token: generateToken(usuario._id) }))
                .catch(err => response.status(400).json(err));
        }
    }
}

module.exports.getUsuario = async (req, res) => {
    const { email, password } = req.body;
    const userFound = await Usuario.findOne({ email });
    //console.log('Usuario encontrado: ', userFound);
    if (userFound && (await bcrypt.compare(password, userFound.password))) {
        res.json({ message: 'Login User', email: userFound.email, token: generateToken(userFound._id) })
    } else {
        res.status(400).json({ message: 'Login Failed' })
    }
}
