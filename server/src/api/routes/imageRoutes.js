export default function (app) {
    var image = require('../controllers/image');

    app.route('/api/image')
        .get(image.listAll)
        .post(image.createNew);

    app.route('/api/image/:imageId')
        .get(image.read);
}