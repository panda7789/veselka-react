const mongoose = require('mongoose');

const { Schema } = mongoose;

const requiredString = ({
    type: String,
    required: true
})

const articleSchema = new Schema({
    title: requiredString,
    text: requiredString,
    images: [{ 
        url: String,
        showInGallery: {
            type: Boolean,
            default: false
        }
    }]
});

const Article = mongoose.model('Article', articleSchema);

module.exports = Article;