const ContactsRepository = require('../repositories/ContactsRepository');


class ContactController {

    //TODAS AS REGRAS DE NEGÓCIOS SÃO TRATADAS NO REPOSITORY
    async index (request, response){
         const contacts = await ContactsRepository.findAll();

        response.json(contacts);
    }

    show(){
        // OBTER UM REGISTRO
    }

    store(){
        // CRIAR UM REGISTRO
    }
    uddate(){
        // EDITAR UM REGISTRO
    }

    delete(){
        // DELETAR UM REGISTRO
    }

}

module.exports = new ContactController();
