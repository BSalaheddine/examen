let express = require('express');
let router = express.Router();

let pieceController = require('./controllers/pieceController.js');

router.get('/', (request, response) => {
    response.redirect('/piece');
});

router.get('/piece', pieceController.Accueil);
router.post('/piece/encode', pieceController.Encode);
router.get('/appart', pieceController.Appart);

module.exports = router;