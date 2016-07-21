import mongoose from 'mongoose';

const repertoireSchema = new mongoose.Schema({
    nom: String,
    telephone: String

});

let model = mongoose.model('Repertoire', repertoireSchema);

export default class Repertoire {

    findAll(req, res) {
        model.find({}, (err, repertoires) => {
            if (err) {
                res.sendStatus(403);
            } else {
                res.json(repertoires);
            }
        });
    }

    findById(req, res) {
        model.findById(req.params.id, (err, repertoire) => {
            if (err || !repertoire) {
                res.sendStatus(403);
            } else {
                res.json(repertoire);
            }
        });
    }

    create(req, res) {
        model.create({
                nom: req.body.nom,
                telephone: req.body.telephone
            },
            (err, repertoire) => {
                if (err) {
                    res.status(500).send(err.message);
                } else {
                    res.json(repertoire);
                }
            });
    }

    update(req, res) {
        model.update({
            _id: req.params.id
        }, {
            nom: req.body.nom,
            telephone: req.body.telephone

        }, (err, repertoire) => {
            if (err || !repertoire) {
                res.status(500).send(err.message);
            } else {
                res.json(repertoire);
            }
        });
    }

    delete(req, res) {
        model.findByIdAndRemove(req.params.id, (err) => {
            if (err) {
                res.status(500).send(err.message);
            } else {
                res.sendStatus(200);
            }
        })
    }
}
