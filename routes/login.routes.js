const { Router } = require("express");
const {check} = require('express-validator');
const {  loginPost, loginGet, loginPostValidate} = require("../controllers/login");
const { validarCampos } = require("../middlewares/validar-campos");
const { validarJWT } = require("../middlewares/validar-jwt");

const router = Router();

router.post("/",[
    check('email', 'el correo es obligatorio').isEmail().not(),
    validarCampos
], loginPost);

router.post("/token",[
    validarJWT
], loginPostValidate);




module.exports = router;