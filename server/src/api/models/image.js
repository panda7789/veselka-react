const mongoose = require('mongoose');

const { Schema } = mongoose;

const imageSchema = new Schema({
    _id: false,
    url: String,
    urlThumbnail: String,
    showInGallery: {
        type: Boolean,
        default: false
    }
},{ _id : false });

const Image = mongoose.model('Image', imageSchema);

module.exports = Image;