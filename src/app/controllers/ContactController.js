class ContactController {

    //TODAS AS REGRAS DE NEGÓCIOS SÃO TRATADOS AQUI
    index (request, response){
        // LISTAR TODOS OS REGISTROS
        response.send('Send from Contact Controller');
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
