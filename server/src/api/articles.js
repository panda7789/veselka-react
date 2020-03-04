const { Router } = require('express');

const Article = require('../models/article')

const router = Router();

router.get('/', async (req, res, next) => {
    try {
        const articles = await Article.find();
        res.json(articles);
    } catch (error) {
        next(error);
    }
});

router.post('/', async (req, res, next) => {
    try {
        const article = new Article(req.body);
        const createdArticle = await article.save();
        res.json(createdArticle);
    } catch (error) {
        if(error.name === 'ValidationError'){
            res.status(422);
        }
        next(error);
    }
});

module.exports = router;