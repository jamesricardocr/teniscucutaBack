const multer = require("multer");

const storage = multer.diskStorage({
  destination: function (req, file, cb, next) {
    cb(null, "./files/");
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, file.fieldname + "-" + uniqueSuffix + ".jpg");
    // console.log(file);
    req.file = file
  },
});

const upload = multer({ storage });

module.exports = upload;
