const { Router } = require("express");
const {  usuariosGet,  usuariosPut,  usuariosPost,  usuariosDelete,} = require("../controllers/usuarios");
const { validarJWT } = require("../middlewares/validar-jwt");

const router = Router();

router.get("/",[
    validarJWT
], usuariosGet);

// router.post("/", usuariosPost);

// router.put("/:id", usuariosPut);

// router.delete("/", usuariosDelete);

module.exports = router;
