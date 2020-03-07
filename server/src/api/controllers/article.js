const Article = require('../models/article')

const listAll = function(req, res) {
    Article.find({}, function(err, article){
        if(err)
            res.send(err);
        res.json(article);
    });
};

const createNew = function(req, res) {
    var newArticle = new Article(req.body);
    newArticle.save(function(err, article) {
        if(err)
            res.send(err);
        res.json(article);
    })
}

const read = function(req, res) {
    Article.findById(req.params.articleId, function(err, article) {
        if(err)
            res.send(err);
        res.json(article);
    });
}

const update = function(req, res) {
    Article.findByIdAndUpdate(req.params.articleId, req.body, function(err, article) {
        if(err)
            res.send(err);
        res.json(article);
    });
}

const deleteItem = function(req, res) {
    Article.findOneAndDelete({_id : req.params.articleId}, function(err, article) {
        if(err)
            res.send(err);
        res.json({ message : 'Úspěšně odstraněno'});
    });
}

module.exports = {
    listAll,
    createNew,
    read,
    update,
    deleteItem
}