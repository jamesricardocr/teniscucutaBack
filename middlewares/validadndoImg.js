const { response, request } = require("express");

const validandoImg = async (req = request, res = response, next) => {
//   console.log(req.file, "es está...");

  if (!req.file) {
    return res.status(400).json({
      msg: "no hay una imagen",
    });
  }
  
  next();
};

module.exports = {
  validandoImg,
};
