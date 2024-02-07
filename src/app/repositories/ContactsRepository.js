// A RESPONSABILIDADE DO REPOSITORY É ACESSAR A DATA SOURCE

const { v4 } = require("uuid");

// MOCKS DE CONTACTS
let contacts = [
  {
    id: v4(),
    name: "Carser",
    email: "carser@email.com",
    phone: "9999999999",
    category_id: v4(),
  },
  {
    id: v4(),
    name: "Joao",
    email: "carser@email.com",
    phone: "9934599999",
    category_id: v4(),
  },
];

class ContactsRepository {
  findAll() {
    // PROMESSA DE RETORNAR SOMENTE QUANDO CARREGAR TODA A LISTA
    return new Promise((resolve) => {
      resolve(contacts);
    });
  }

  findById(id) {
    return new Promise((resolve) => {
      resolve(contacts.find((contact) => contact.id === id));
    });
  }

  // USA NA FUNÇÃO 'STORE' EM CONTROLLER
  findByEmail(email) {
    return new Promise((resolve) => {
      resolve(contacts.find((contact) => contact.email === email));
    });
  }

  delete(id) {
    return new Promise((resolve) => {
      contacts = contacts.filter((contact) => contact.id !== id);
      resolve();
    });
  }

  // USA NA FUNÇÃO 'STORE' EM CONTROLLER
  create({ name, email, phone, category_id }) {
    return new Promise((resolve) => {
      const newContact = {
        id: v4(),
        name,
        email,
        phone,
        category_id,
      }

      contacts.push(newContact);
      resolve(newContact);
    });
  }
}

module.exports = new ContactsRepository();
