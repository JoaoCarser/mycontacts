// A RESPONSABILIDADE DO REPOSITORY É ACESSAR A DATA SOURCE

const { v4 } = require("uuid");

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
    return new Promise((resolve) => {
      resolve(contacts);
    });
  }

  findById(id) {
    return new Promise((resolve) => {
      resolve(contacts.find((contact) => contact.id === id));
    });
  }


  delete(id){
    return new Promise((resolve) => {
      contacts = (contacts.filter((contact) => contact.id !== id));
      resolve();
    });
  }
}

module.exports = new ContactsRepository();
