const mongoose = require('mongoose');
const image = require('./image');

const { Schema } = mongoose;

const requiredString = ({
    type: String,
    required: true
})

const aktualitaSchema = new Schema({
    title: requiredString,
    text: requiredString,
    images: [image.schema]
});

const Aktuality = mongoose.model('Aktuality', aktualitaSchema);

module.exports = Aktuality;