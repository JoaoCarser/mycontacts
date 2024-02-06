const { Router } = require("express");

const router = Router();

const ContactController = require('./app/controllers/ContactController');

// QUANDO O CONTROLLER FOR X EXECUTE O HANDLER Y
router.get('/contacts', ContactController.index);


module.exports = router;
