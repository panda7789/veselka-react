var express = require('express'),
    router = express.Router();
var Image = require('../models/image');
const { uploadToS3 } = require('../controllers/image');
var multer = require('multer');
var upload = multer();
const AWS = require('aws-sdk');
AWS.config.loadFromPath('s3_aws.json');
s3 = new AWS.S3({apiVersion: '2006-03-01'});

router.get('/', async (req, res) => {
    try {
        var dbResult = await Image.find().skip(parseInt(req.query.offset) ?? 0).limit(parseInt(req.query.limit) ?? 0);
        dbResult = JSON.stringify(dbResult).replace(/_id/g, "id");
        res.json(JSON.parse(dbResult));
    } catch (err) {
        console.log(err);
        res.send(err);
    }
});

router.post('/', upload.any(), (req, res) => {
    try {
        var resultImages = new Array();
        var promise = new Promise((resolve, reject) => {
            req.files.forEach(async file => {
                var singleImage = await uploadToS3(file);
                resultImages.push(singleImage);
                if (resultImages.length === req.files.length){
                    resolve();   
                }
            });
        });
        promise.then(() => {
            res.json(resultImages);
        });
    }
    catch(e) {
        console.log(e);
        res.json(e);
    }
});

module.exports = router;