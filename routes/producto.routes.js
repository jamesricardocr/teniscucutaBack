const { Router } = require("express");
const {
  productoPost,
  productoGet,
  productoPut,
  productoDelete,
  productoActivate,
  productoPutDisable,
} = require("../controllers/producto");
const { validarJWT } = require("../middlewares/validar-jwt");
const upload = require("../middlewares/validar-imagenes");
const router = Router();

router.post("/", [validarJWT, upload.single("image")], productoPost);

router.put("/:id", [validarJWT, upload.single("image")], productoPut);



router.get(
  "/",
  [
    // validarJWT
  ],
  productoGet
);

router.put("/:id", [validarJWT], productoPut);

router.put("/activate/:id", [validarJWT], productoActivate);

router.delete("/:id", [validarJWT], productoDelete);

module.exports = router;
