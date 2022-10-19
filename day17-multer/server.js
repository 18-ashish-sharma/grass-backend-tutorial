const express = require("express");
const PORT = 8000;
const multer = require("multer");
const app = express();
const fs = require('file-system');
const mongoose = require('mongoose');
const DB = require("./db/index");
const img = require("./model");
const cloudinary = require("cloudinary");

cloudinary.config({
    cloud_name: 'dil2kbrm4',
    api_key: '',
    api_secret: '',
})

app.use(express.urlencoded({ extended: false }))
app.use(express.json())
// connecting database
DB();
// SET STORAGE
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads");
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + "-" + Date.now());
  },
});

const upload = multer({ storage: storage });

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.post("/uploadfile", upload.single("myFile"), (req, res, next) => {
  console.log(req.file);
  const file = req.file;
  if (!file) {
    const error = new Error("Please upload a file");
    error.httpStatusCode = 400;
    return next(error);
  }
  res.send(file);
});

//Uploading multiple files
app.post("/uploadmultiple", upload.array("myFiles", 12), (req, res, next) => {
  const files = req.files;
  if (!files) {
    const error = new Error("Please choose files");
    error.httpStatusCode = 400;
    return next(error);
  }
  res.send(files);
});

app.post('/uploadphoto', upload.single('myImage'), async (req, res) => {
    const img = fs.readFileSync(req.file.path);
    const encode_image = img.toString('base64');
    // Define a JSONobject for the image attributes for saving to database
 
    const finalImg = {
        contentType: req.file.mimetype,
        image: Buffer.from(encode_image, 'base64')
    };
     DB.collection('images').insertOne(finalImg, (err, result) => {
        console.log(result)
        if (err) return console.log(err)
        console.log('saved to database')
        res.redirect('/')
    })
})

app.listen(PORT, console.log("Server listening on port " + PORT));