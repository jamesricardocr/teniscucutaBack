const { Router } = require("express");
const { validarJWT } = require("../middlewares/validar-jwt");
const {
  confirmacionGet,
  confirmacionPost,
  confirmacionPut,
} = require("../controllers/confirmacion");

const router = Router();

router.post("/", [validarJWT], confirmacionPost);

router.put("/:id", [validarJWT], confirmacionPut);

router.get("/", confirmacionGet);

module.exports = router;
