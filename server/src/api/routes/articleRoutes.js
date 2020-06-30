var article = require('../controllers/article');
module.exports = function(app){
    app.route('/api/articles')
        .get(article.listAll)
        .post(article.createNew);

    app.route('/api/articles/:articleId')
        .get(article.read)
        .put(article.update)
        .delete(article.deleteItem);
}