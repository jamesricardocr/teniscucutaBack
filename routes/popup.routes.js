const { Router } = require("express");
const {
  popupGet,
  popupPut
} = require("../controllers/popup");
const { validarJWT } = require("../middlewares/validar-jwt");
const upload = require("../middlewares/validar-imagenes");
const router = Router();


router.put("/:id", [validarJWT, upload.single("image")], popupPut);

router.get(
  "/",
  [
    // validarJWT
  ],
  popupGet
);

router.put("/:id", [validarJWT], popupPut);



module.exports = router;
