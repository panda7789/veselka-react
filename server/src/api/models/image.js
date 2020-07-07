const mongoose = require('mongoose');

const { Schema } = mongoose;

const imageSchema = new Schema({
    url: String,
    urlThumbnail: String,
    showInGallery: {
        type: Boolean,
        default: false
    }
});

const Image = mongoose.model('Image', imageSchema);

module.exports = Image;