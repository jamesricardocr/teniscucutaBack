const {response} = require('express');
const usuario = require('../models/user');

const usuariosGet = async (req, res = response) => {
    const usuarios = await usuario.findAll();
    res.json({
        usuarios
    })

}
const usuariosPost = (req, res = response) => {
    let {nombre, edad} = req.body
    res.json({
        msg: 'post API - Controlador',
        nombre,
        edad
    })
}
const usuariosPut = (req, res = response) => {
    const id = req.params.id
    res.json({
        msg: 'put API - Controlador',
        id
    })
}
const usuariosDelete = (req, res = response) => {
    res.json({
        msg: 'delete API - Controlador'
    })
}

module.exports = {
    usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosDelete
}