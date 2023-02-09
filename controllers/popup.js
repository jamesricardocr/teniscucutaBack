const { response } = require("express");
const popup = require("../models/popup");


const popupGet = async (req, res = response) => {
  const popupAll = await popup.findAll();

  try {
    res.json({
      msg: "mostrando los popup desde el get",
      popupAll,
    });
  } catch (error) {
    return res.status(404).json({
      msg: "Hubo un problema",
    });
  }
};

const popupPut = async (req, res = response) => {
  const id = req.params.id;
  const body = req.body;
  req.body.editadopor = req.user.email;
  if (req.file) {
    req.body.imagen = req.file.filename;
  } else {
    // const popupAll = await popup.findAll();
    req.body.imagen = req.body.image;
  }

  try {
    const popupAll = await popup.update(body, { where: { id } });
    if (popupAll) {
      return res.status(201).json({
        msg: "El popup fue actualizado exitosamente",
      });
    }
  } catch (error) {
    return res.status(201).json({
      msg: "Hubo un problema al actualizar el popup",
    });
  }
};



module.exports = {
  popupGet,
  popupPut
};
