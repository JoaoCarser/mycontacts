const { Router } = require("express");

const router = Router();

const ContactController = require("./app/controllers/ContactController");

// QUANDO O ENDPOINT FOR X EXECUTE O HANDLER Y

router.get('/contacts', ContactController.index);

router.get('/contacts/:id', ContactController.show);

router.delete('/contacts/:id', ContactController.delete);

router.post('/contacts', ContactController.store);


module.exports = router;
