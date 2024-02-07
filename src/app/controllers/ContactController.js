const ContactsRepository = require("../repositories/ContactsRepository");

class ContactController {
  //TODAS AS REGRAS DE NEGÓCIOS SÃO TRATADAS NO REPOSITORY
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

  store() {
    // CRIAR UM REGISTRO
  }
  uddate() {
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
