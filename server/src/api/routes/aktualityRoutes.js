var express = require('express'),
    router = express.Router();
var Aktuality = require('../models/aktuality');

router.get('/', function(req, res) {
    Aktuality.find({}, function (err, aktuality) {
        if (err){
            console.log("ERROR: ", err);
            res.send(err);
        }
        aktuality = JSON.stringify(aktuality).replace(/_id/g, "id");
        res.json(JSON.parse(aktuality));
    });
});
router.get('/:id', function(req, res) {
    Aktuality.findById(req.params.id, function (err, aktualita) {
        if (err){
            console.log("ERROR: ", err);
            res.send(err);
        }
        aktualita = JSON.stringify(aktualita).replace(/_id/g, "id");
        res.json(JSON.parse(aktualita));
    });
});
router.post('/', function(req, res) {
    var akt = new Aktuality(req.body);

    akt.save((err, result) => {
        if (err){
            console.log(err);
            res.json(err);
        }
        res.json(result);
    })
});
router.put('/:id', (req, res) => {
    Aktuality.findById(req.params.id, (err, result) => {
        if (err){
            console.log(err);
            res.json(err);
        }
        console.log(result);
        result.title = req.body.title;
        result.text = req.body.text;
        result.images = req.body.images;
        result.save(err => {
            if (err){
                console.log(err);
                res.json(err);
            }
            res.json(result);
        });
    });
});
router.delete('/:id', function(req, res) {
    Aktuality.deleteOne({ _id: req.params.id}, (err) => {
        if (err){
            console.log(err);
            res.json(err);
        }
        else{
            res.status(200).send();
        }
    });
});

module.exports = router;