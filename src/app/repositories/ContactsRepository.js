// A RESPONSABILIDADE DO REPOSITORY É ACESSAR A DATA SOURCE

const { uuid } = require("uuidv4");

const contacts = [
  {
    id: uuid(),
    name: "Carser",
    email: "carser@email.com",
    phone: "9999999999",
    category_id: uuid(),
  },
];

class ContactsRepository {
  findAll() {
    return new Promise((resolve) => {
      resolve(contacts);
    });
  }
}

module.exports = new ContactsRepository();
