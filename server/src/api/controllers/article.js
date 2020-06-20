const Article = require('../models/article');
const Image = require('../models/image');
const base64Img = require('base64-img');
const imagemin = require('imagemin');
const imageminJpegtran = require('imagemin-jpegtran');
const sharp = require('sharp');

var imagesPath = 'img/';

const listAll = function (req, res) {
    Article.find({}, function (err, article) {
        if (err)
            res.send(err);

        res.set('Content-Range', 'users 0-24/' + article.length);
        res.set('Access-Control-Expose-Headers', 'Content-Range');
        res.set('X-Total-Count', 10);

        if(article.images){
            article.images.map((img)=>{
                console.log(img);
            });
        }

        article = JSON.stringify(article).replace(/_id/g, "id");
        res.json(JSON.parse(article));
    });
};

const createNew = function (req, res) {
    var newArticle = new Article({
        title: req.body.title,
        text: req.body.text
    });
    console.log("newArticle:" + newArticle);
    newArticle.save(function (err, article) {
        if (err) {
            res.send(err);
        }
        article = JSON.stringify(article).replace(/_id/g, "id");
        res.json(JSON.parse(article));
    })
}

const read = function (req, res) {
    Article.findById(req.params.articleId, function (err, article) {
        if (err)
            res.send(err);
        article = JSON.stringify(article).replace(/_id/g, "id");
        res.json(JSON.parse(article));
    });
}

const update = function (req, res) {
    const updatedArticle = new Article({
        title: req.body.title,
        text: req.body.text,
        images: [],
        _id: false
    });

    imageManipulation(req.body.images, req.params.articleId, (err, images) => {
        if(err)
            console.log(err);
        updatedArticle.images = images;
        console.log(updatedArticle);
    
        Article.findByIdAndUpdate(req.params.articleId, updatedArticle, function (err, article) {
            if (err)
                res.send(err);
            res.json(article);
        });
    });
}

const deleteItem = function (req, res) {
    Article.findByIdAndDelete({ _id: req.params.articleId }, function (err, article) {
        if (err)
            res.send(err);
        res.json({ message: 'Úspěšně odstraněno' });
    });
}

async function imageManipulation(data, id_article, callback) {
    let images = []
    let index=0;
    await Promise.all(data.map(async (img) => {
        try {
            var filepath = base64Img.imgSync(img.src, imagesPath, index);

            console.log(filepath);
            var imageObject = new Image();
            imageObject.url = filepath;
            imageObject.showInGallery = true;
            imageObject.urlThumbnail = await createThumbnail(filepath);
            optimalizeImage(filepath);
            images.push(imageObject);
            index++;

        } catch (error) {
            console.log('error' + error);
            callback(error);
        }
    }))
    console.log('complete all') // gets loged first
    callback(null,images);
}

const optimalizeImage = (async (imgPath) => {
    await imagemin([imgPath.replace('\\', '/')], {
        destination: imagesPath,
        plugins: [
            imageminJpegtran()
        ]
    });
});

const createThumbnail = (async (imgPath) => {
    sharp(imgPath)
        .resize(320, 240)
        .toFile(imgPath.replace('.jpg', '_thumb.jpg'), (err, info) => {
            if (err)
                console.log(err);
            return imgPath.replace('.jpg', '_thumb.jpg');
        });
});

module.exports = {
    listAll,
    createNew,
    read,
    update,
    deleteItem
}