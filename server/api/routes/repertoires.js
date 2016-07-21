import express from 'express';
import Repertoire from '../models/repertoire.js';

let router = express.Router();

module.exports = (app) => {

    var repertoire = new Repertoire();

    router.get('/', repertoire.findAll);

    router.get('/:id', repertoire.findById);

    router.post('/', repertoire.create);

    router.put('/:id', repertoire.update);

    router.delete('/:id', repertoire.delete);

    app.use('/repertoires', router);

}