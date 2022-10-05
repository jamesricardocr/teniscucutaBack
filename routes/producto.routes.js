const { Router } = require("express");
const {check} = require('express-validator');
const {productoPost, productoGet, productoPut, productoDelete, productoActivate} = require("../controllers/producto");
const { validarCampos } = require("../middlewares/validar-campos");
const { validarJWT } = require("../middlewares/validar-jwt");
const upload = require("../middlewares/validar-imagenes");
const { verify } = require("jsonwebtoken");
const { validandoImg } = require("../middlewares/validadndoImg");
const router = Router();


router.post("/",[
    validarJWT,
    upload.single('image'),
],
 productoPost);

router.put("/:id",[
    validarJWT,
    upload.single('image'),
],
productoPut);

// router.post("/image",[
//     validarJWT,
//     upload.single('image'),
//     validandoImg,
// ],
//  productoPostImage);


router.get("/",[
    // validarJWT
], productoGet);


router.put("/:id",[
    validarJWT
], productoPut);

router.put("/activate/:id",[
    validarJWT
], productoActivate);

router.delete("/:id",[
    validarJWT
], productoDelete);



module.exports = router;