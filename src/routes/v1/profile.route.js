let express = require('express'),
    multer = require('multer'),
    mongoose = require('mongoose'),
    uuidv4 = require('uuid/v4'),
    router = express.Router();

const DIR = '/home/tops/Reactjs Project/node-express-boilerplate/src/public/';

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, DIR);
    },
    filename: (req, file, cb) => {
        const fileName = file.originalname.toLowerCase().split(' ').join('-');
        cb(null, uuidv4() + '-' + fileName)
    }
});

var upload = multer({
    storage: storage,
    fileFilter: (req, file, cb) => {
        if (file.mimetype == "image/png" || file.mimetype == "image/jpg" || file.mimetype == "image/jpeg") {
            cb(null, true);
        } else {
            cb(null, false);
            return cb(new Error('Only .png, .jpg and .jpeg format allowed!'));
        }
    }
});

// User model

let User = require('../../models/user.model');

router.post('/upload-images', upload.array('imgCollection', 1), (req, res) => {
    const reqFiles = [];
    const url = req.protocol + '://' + req.get('host')
    for (var i = 0; i < req.files.length; i++) {
        reqFiles.push(url + '/home/tops/Reactjs Project/node-express-boilerplate/src/public/' + req.files[i].filename)
    }

    const user = new User({
         _id: new mongoose.Types.ObjectId(),
        // name: req.body.name,
        // email: req.body.email,
        // password: req.body.password,
        imgCollection: reqFiles
    });

    user.save().then(result => {
        res.status(201).json({
            message: "Done upload!",
            userCreated: {
                _id: result._id,
                // name: result.name,
                // email: result.email,
                // password: result.password,
                imgCollection: result.imgCollection
            }
        })
    }).catch(err => {
        console.log(err),
            res.status(500).json({
                error: err
            });
    })
})

router.get("/", (req, res, next) => {
    User.find().then(data => {
        res.status(200).json({
            message: "User list retrieved successfully!",
            users: data
        });
    });
});
module.exports = upload;
module.exports = router;