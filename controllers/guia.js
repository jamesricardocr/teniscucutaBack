const { response } = require("express");
const guia = require("../models/guia")


const guiasGet = async (req, res = response) => {
  const guiaAll = await guia.findAll();
  res.json({
    msg: "mostrando las guias desde el get",
    guiaAll,
  });
};

const guiasGetID = async (req, res = response) => {
  const pedidoID = req.params.id;
  try {
    const guiaAll = await guia.findAll({ where: { pedidoID }});
    res.json({
      msg: `mostrando la guia con pedidoID ${pedidoID} `,
      guiaAll,
    });
  } catch (error) {
    return res.status(201).json({
      msg: "Hubo un problema..",
    });
  }

};


module.exports = {
    guiasGet,
    guiasGetID
};
