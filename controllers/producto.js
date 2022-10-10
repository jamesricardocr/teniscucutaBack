const { response } = require("express");
const producto = require("../models/producto");

const productoPost = async (req, res = response) => {
  try {
    req.body.editadopor = req.user.email;
    req.body.estadoproducto = "Activo";
    req.body.imagen = req.file.filename;
    const body = req.body;
    producto.create(body);
    return res.status(201).json({
      msg: "producto creado exitosamente",
    });
  } catch (error) {
    return res.status(400).json({
      msg: "no se pudo agregar el producto",
    });
  }
};

const productoGet = async (req, res = response) => {
  const productoAll = await producto.findAll();

  res.json({
    msg: "mostrando los producto desde el get",
    productoAll,
  });
};

const productoPut = async (req, res = response) => {
  const id = req.params.id;
  const body = req.body;

  if (req.file) {
    req.body.imagen = req.file.filename;
  } else {
    // const productoAll = await producto.findAll();
    req.body.imagen = req.body.image;
  }

  try {
    const productoAll = await producto.update(body, { where: { id } });
    if (productoAll) {
      return res.status(201).json({
        msg: "El producto fue actualizado exitosamente",
      });
    }
  } catch (error) {
    return res.status(201).json({
      msg: "Hubo un problema al actualizar el producto",
    });
  }
};

// const productoPutDisable = async (req, res = response) => {
//   const id = req.params.id;
//   const body = req.body;
//   console.log(req.params);
//   console.log(body);

//   try {
//     const productoChangeStock = await producto.update(
//       { estadoproducto: body },
//       { where: { id } }
//     );
//     if (productoChangeStock) {
//       return res.status(201).json({
//         msg: "El producto fue actualizado exitosamente",
//       });
//     }
//   } catch (error) {
//     return res.status(201).json({
//       msg: "Hubo un problema al actualizar el producto",
//     });
//   }
// };

const productoActivate = async (req, res = response) => {
  const id = req.params.id;
  try {
    const productoAll = await producto.update(
      { estadoproducto: "Activo" },
      { where: { id } }
    );
    return res.status(200).json({
      msg: "El producto fue activado exitosamente..",
    });
  } catch (error) {
    return res.status(201).json({
      msg: "Hubo un problema al activar el producto",
    });
  }
};

const productoDelete = async (req, res = response) => {
  const id = req.params.id;
  try {
    const productoAll = await producto.update(
      { estadoproducto: "Desactivado" },
      { where: { id } }
    );
    return res.status(200).json({
      msg: "El producto fue borrado exitosamente..",
      status: productoAll,
    });
  } catch (error) {
    return res.status(201).json({
      msg: "Hubo un problema al borrar el producto",
    });
  }
};

module.exports = {
  productoPost,
  productoGet,
  productoPut,
  productoDelete,
  productoActivate,
};
