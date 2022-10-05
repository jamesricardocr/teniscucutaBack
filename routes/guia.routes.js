const { Router } = require("express");
const { validarJWT } = require("../middlewares/validar-jwt");
const { guiasGetID } = require("../controllers/guia");

const router = Router();

router.get("/:id", [validarJWT], guiasGetID);

module.exports = router;
