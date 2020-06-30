var mongoose = require('mongoose');

const { Schema } = mongoose;

const requiredString = ({
    type: String,
    required: true
})

const akceSchema = new Schema({
    nazev: requiredString,
    misto: requiredString,
    datum: { type: Date },
    typ: { type: String }
});

const Akce = mongoose.model('Akce', akceSchema, 'akce');

module.exports = Akce;