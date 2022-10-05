const { Router } = require("express");
const { validarJWT } = require("../middlewares/validar-jwt");
const upload = require("../middlewares/validar-imagenes");
const {
  remitenteGet,
  remitentePost,
  remitentePut,
} = require("../controllers/remitente");

const router = Router();

router.post("/", [validarJWT], remitentePost);

router.put("/:id", [validarJWT], remitentePut);

router.get("/", [validarJWT], remitenteGet);

module.exports = router;
