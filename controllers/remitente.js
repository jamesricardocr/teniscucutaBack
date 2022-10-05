const { response } = require("express");
const remitente = require("../models/remitente");

const remitentePost = async (req, res = response) => {
  console.log(req.body);
  const body = req.body
  try {
    remitente.create(body);
    return res.status(201).json({
      msg: "remitente creado exitosamente",
    });
  } catch (error) {
    return res.status(400).json({
      msg: "no se pudo agregar el remitente",
      body,
    });
  }
};

const remitenteGet = async (req, res = response) => {
  const remitenteAll = await remitente.findAll();

  res.json({
    msg: "mostrando los remitente desde el get",
    remitenteAll,
  });
};

const remitentePut = async (req, res = response) => {
  const id = req.params.id;
  const body = req.body;
  // console.log(req.params);

  try {
    const remitenteAll = await remitente.update(body, { where: { id } });
    if (remitenteAll) {
      return res.status(201).json({
        msg: "El remitente fue actualizado exitosamente",
      });
    }
  } catch (error) {
    return res.status(201).json({
      msg: "Hubo un problema al actualizar el remitente",
    });
  }
};



module.exports = {
  remitentePost,
  remitenteGet,
  remitentePut,
  // remitentePostImage
};
