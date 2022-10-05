const { Router } = require("express");
const {check} = require('express-validator');
const { pedidoPost, pedidoGet, pedidoPut, pedidoDelete, pedidoGetid } = require("../controllers/pedido");
const { validarCampos } = require("../middlewares/validar-campos");
const { validarJWT } = require("../middlewares/validar-jwt");


const router = Router();

router.post("/", pedidoPost);

router.get("/",[
    validarJWT
], pedidoGet);

router.get("/:id",[
], pedidoGetid);


router.put("/:id",[
    validarJWT
], pedidoPut);

router.delete("/:id",[
    validarJWT
], pedidoDelete);


module.exports = router;