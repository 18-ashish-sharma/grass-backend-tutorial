const express = require("express");
const app = express();
const PORT = 8000;
const path = require("path");
const multer  = require('multer')
// const upload = multer({ dest: 'uploads/' })

app.set("views", path.join(__dirname, 'views'))
app.set("view engine", 'ejs')

app.use(express.json());

const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, file);
    },
    filename: function(req, file, cb) {
        cb(null, file.fieldname + "-" + Date.now()+".jpg");
    }
})

const maxSize = 1 * 1000 * 1000;

const upload = multer({ 
    storage: storage,
    limits: { fileSize: maxSize },
    fileFilter: function(req, file, cb) {
        let filetypes = /jpg/;
        let mimetype = filetypes.test(file.mimetype);

        let extname = filetypes.test(path.extname(file.originalname));
        if (mimetype && extname) {
            console.log(extname, filetypes);
            return cb(null, true);
        }

        cb("Error" + filetypes)
    }
}).single('mypic')

app.get("/", function(req, res) {
    res.render("index")
})

app.post('/profileupload', function (req, res, next) {
    // req.file is the `avatar` file
    // req.body will hold the text fields, if there were any
    upload(req, res, function (err) {
        if(err) {
            res.send({
            err: err
            })
        }
        else {
            res.send('Success')
        }
    })
  })

app.listen(PORT, console.log("Server listening on port " + PORT));