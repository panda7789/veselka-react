var express = require('express'),
    router = express.Router();
var Akce = require('../models/akce');

router.get('/', function(req, res) {
    Akce.find({}, function (err, akce) {
        if (err){
            console.log("ERROR: ", err);
            res.send(err);
        }
        akce = JSON.stringify(akce).replace(/_id/g, "id");
        res.json(JSON.parse(akce));
    });
});
router.get('/:id', function(req, res) {
    Akce.findById(req.params.id, function (err, akce) {
        if (err){
            console.log("ERROR: ", err);
            res.send(err);
        }
        akce = JSON.stringify(akce).replace(/_id/g, "id");
        res.json(JSON.parse(akce));
    });
});
router.post('/', function(req, res) {
    var akce = new Akce(req.body);
    akce.save((err, result) => {
        if (err){
            console.log(err);
            res.json(err);
        }
        res.json(result);
    })
});
router.put('/:id', function(req, res) {
    var akce = new Akce(req.body);
    akce.save((err, result) => {
        if (err){
            console.log(err);
            res.json(err);
        }
        res.json(result);
    })
});
router.delete('/:id', function(req, res) {
    Akce.deleteOne({ _id: req.params.id}, (err) => {
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
