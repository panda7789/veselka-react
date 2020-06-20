const mongoose = require('mongoose');
const image = require('./image');

const { Schema } = mongoose;

const requiredString = ({
    type: String,
    required: true
})

const articleSchema = new Schema({
    title: requiredString,
    text: requiredString,
    images: [image.schema]
});

const Article = mongoose.model('Article', articleSchema);

module.exports = Article;