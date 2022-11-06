const multer = require("multer");

const storage = multer.diskStorage({
  destination: function (req, file, cb, next) {
    cb(null, "./guias/");
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, file.fieldname + "-" + uniqueSuffix + ".jpg");
    console.log( file.fieldname + "-" + uniqueSuffix + ".jpg", 'desde el midelware');
    req.file = file
    req.body.imagen = file.fieldname + "-" + uniqueSuffix + ".jpg"
  },
});

const uploadGuia = multer({ storage });

module.exports = uploadGuia;
