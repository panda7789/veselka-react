const mongoose = require('mongoose');
const image = require('./image');

const { Schema } = mongoose;

const requiredString = ({
    type: String,
    required: true
})

const aktualitySchema = new Schema({
    title: requiredString,
    text: requiredString,
    images: [image.schema]
});

const Aktuality = mongoose.model('Aktuality', aktualitySchema);

module.exports = Aktuality;