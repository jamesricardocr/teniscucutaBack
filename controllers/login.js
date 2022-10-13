const { response } = require("express");
const { generarJWT } = require("../helpers/generar-jwt");
const usuario = require("../models/user");

const loginPost = async (req, res = response) => {
  const { email, password } = req.body;

  try {
    const user = await usuario.findOne({ where: { email } });
    if (user === null) {
      console.log("el correo no se encuentra en la base de datos..");
      return res.status(400).json({
        msg: "el correo no existe...",
      });
    }

    if (user.password != password) {
      return res.status(400).json({
        msg: "la contraseña es invalida",
      });
    }

    const token = await generarJWT(user.id);

    return res.json({
      // msg: "el usuario se ha logeado con exito",
      token,
    });
  } catch (error) {
    return res.json({
      msg: "algo salio mal..",
    });
  }
};

const loginPostValidate = async (req, res = response) => {
  res.json({
    msg: true
  })

};
// const loginGet = async (req, res = response) => {
//   const usuarios = await usuario.findAll({
//     where: {
//       id: 1,
//     },
//   });
//   res.json({
//     usuarios,
//   });
// };
module.exports = {
  loginPostValidate,
  loginPost,
  // loginGet,
};
