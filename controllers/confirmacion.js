const { response } = require("express");
const confirmacion = require("../models/confirmacion");

const confirmacionPost = async (req, res = response) => {
  console.log(req.body);
  const body = req.body
  try {
    confirmacion.create(body);
    return res.status(201).json({
      msg: "confirmacion creado exitosamente",
    });
  } catch (error) {
    return res.status(400).json({
      msg: "no se pudo agregar el confirmacion",
      body,
    });
  }
};

const confirmacionGet = async (req, res = response) => {
  const confirmacionAll = await confirmacion.findAll();

  res.json({
    msg: "mostrando los confirmacion desde el get",
    confirmacionAll,
  });
};

const confirmacionPut = async (req, res = response) => {
  const id = req.params.id;
  const body = req.body;
  // console.log(req.params);

  try {
    const confirmacionAll = await confirmacion.update(body, { where: { id } });
    if (confirmacionAll) {
      return res.status(201).json({
        msg: "El confirmacion fue actualizado exitosamente",
      });
    }
  } catch (error) {
    return res.status(201).json({
      msg: "Hubo un problema al actualizar el confirmacion",
    });
  }
};



module.exports = {
  confirmacionPost,
  confirmacionGet,
  confirmacionPut,
  // confirmacionPostImage
};
