// A RESPONSABILIDADE DO REPOSITORY É ACESSAR A DATA SOURCE

const { v4 } = require("uuid");

const db = require("../../database");

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
    email: "jaumcarser@email.com",
    phone: "9934599999",
    category_id: v4(),
  },
];

class ContactsRepository {
  // QUANDO NAO HOUVER DIRECTION NA REQUISIÇÃO TORNE 'ASC' PADRÃO
  async findAll(orderBy = 'ASC') {
    // PARA RETORNAR UMA LISTA NÃO PÕE ROWS ENTRE []
    // PARA EVITAR SQL INJECTION DEFINE EM DIRECTION QUAIS AS 2 POSSIBILIDADES DO orderBy
    const direction = orderBy.toUpperCase() === 'DESC' ? 'DESC' : 'ASC';
    const rows = await db.query(`SELECT * FROM contacts ORDER BY name ${direction}`);
    return rows;
  }

  async findById(id) {
    const [row] = await db.query("SELECT * FROM contacts WHERE id = $1", [id]);
    return row;
  }

  // USA NA FUNÇÃO 'STORE' EM CONTROLLER
  async findByEmail(email) {
    const [row] = await db.query("SELECT * FROM contacts WHERE email = $1", [email]);
    return row;
  }

  delete(id) {
    return new Promise((resolve) => {
      contacts = contacts.filter((contact) => contact.id !== id);
      resolve();
    });
  }

  // USA NA FUNÇÃO 'STORE' EM CONTROLLER
  async create({ name, email, phone, category_id }) {
    const [row] = await db.query(
      `
    INSERT INTO contacts (name, email, phone, category_id) 
    VALUES ($1, $2, $3, $4)
    RETURNING *
      `,
      [name, email, phone, category_id]
    );

    return row;
  }

  update(id, { name, email, phone, category_id }) {
    return new Promise((resolve) => {
      const updatedContact = {
        id: v4(),
        name,
        email,
        phone,
        category_id,
      };

      contacts = contacts.map((contact) =>
        contact.id === id ? updatedContact : contact
      );

      resolve(updatedContact);
    });
  }
}

module.exports = new ContactsRepository();
