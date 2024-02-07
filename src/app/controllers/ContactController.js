const ContactsRepository = require("../repositories/ContactsRepository");

class ContactController {
  //TODAS AS REGRAS DE NEGÓCIOS SÃO TRATADAS NO REPOSITORY
  
  
  //TODA FUNÇÃO QUE UTILIZA 'AWAIT' PRECISA SER 'ASYNC'
  async index(request, response) {
    const contacts = await ContactsRepository.findAll();

    response.json(contacts);
  }

  async show(request, response) {
    const { id } = request.params;

    const contact = await ContactsRepository.findById(id);

    if (!contact) {
      return response.status(404).json({ error: "Contact not found" });
    }

    response.json(contact);
  }

  // MÉTODO PARA CADASTRAR
  async store(request, response) {

    // DESESTRUTURA OS ATRIBUTOS DO BODY QUE ESTÁ SENDO REQUISITADO
    const { name, email, phone, category_id } = request.body;


    if(!name) {
      return response.status(400).json({ error: 'Name is required' });
    }

    // EXECUTE A FUNÇÃO UTILIZANDO O EMAIL QUE FOI DESESTRUTURADO
    const contactExists = await ContactsRepository.findByEmail(email);


    if(contactExists) {
      return response.status(400).json({ error: 'This e-mail is already been taken' });
    }

    // CASO ESSE CONTATO NAO EXISTA CRIE ATRAVES DA FUNÇÃO EM REPOSITORY
    const contact = await ContactsRepository.create({
      name,
      email,
      phone,
      category_id
    });

    response.json(contact);


  }
  update() {
    // EDITAR UM REGISTRO
  }

  async delete(request, response) {
    const { id } = request.params;

    const contact = await ContactsRepository.findById(id);

    if (!contact) {
      return response.status(404).json({ error: "Contact not found" });
    }

    await ContactsRepository.delete(id);
    response.sendStatus(204);
  }
}

module.exports = new ContactController();
