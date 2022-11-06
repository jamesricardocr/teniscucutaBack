const { Router } = require("express");
const {check} = require('express-validator');
const { pedidoPost, pedidoGet, pedidoPut, pedidoDelete, pedidoGetid, pedidoADguia } = require("../controllers/pedido");
const { validarCampos } = require("../middlewares/validar-campos");
const { validarJWT } = require("../middlewares/validar-jwt");
const uploadGuia = require("../middlewares/validar-imagenes-guias");

const router = Router();

router.post("/", pedidoPost);

router.get("/",[
    validarJWT
], pedidoGet);

router.get("/:id",[
], pedidoGetid);


router.put("/:id",[
    validarJWT,
], pedidoPut);

router.put("/guia/:id",[
    validarJWT,
    uploadGuia.single("image")
], pedidoADguia);

router.delete("/:id",[
    validarJWT
], pedidoDelete);


module.exports = router;