import Image from '../models/image';
import multer, { diskStorage } from 'multer';

const storage = diskStorage({
    destination: function (req, file, cb) {
        cb(null, './img/');
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + file.originalname);
    }
});

const upload = multer({
    storage: storage,
    limits: {
        fileSize: 1024 * 1024 * 5
    }
})

const createNew = new function(req, res) {
    console.log(req.body);
    const newImage = new Image({
        url: 
    })
}