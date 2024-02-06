const { Router } = require("express");

const router = Router();

const ContactController = require('./app/controllers/ContactController');

// ROTAS SERÃO FEITAS AQUI (METODO, ENDPOINT, "HANDLER DE CONTACT CONTROLLER")
router.get('/contacts', ContactController.index);


module.exports = router;
