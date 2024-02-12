// A RESPONSABILIDADE DO REPOSITORY É ACESSAR A DATA SOURCE
const db = require("../../database");

class ContactsRepository {
  // QUANDO NAO HOUVER DIRECTION NA REQUISIÇÃO TORNE 'ASC' PADRÃO
  async findAll(orderBy = "ASC") {
    // PARA RETORNAR UMA LISTA NÃO PÕE ROWS ENTRE []
    // PARA EVITAR SQL INJECTION DEFINE EM DIRECTION QUAIS AS 2 POSSIBILIDADES DO orderBy
    const direction = orderBy.toUpperCase() === "DESC" ? "DESC" : "ASC";
    const rows = await db.query(
      `SELECT * FROM contacts ORDER BY name ${direction}`
    );
    return rows;
  }

  async findById(id) {
    const [row] = await db.query("SELECT * FROM contacts WHERE id = $1", [id]);
    return row;
  }

  // USA NA FUNÇÃO 'STORE' EM CONTROLLER
  async findByEmail(email) {
    const [row] = await db.query("SELECT * FROM contacts WHERE email = $1", [
      email,
    ]);
    return row;
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

  async update(id, { name, email, phone, category_id }) {
    const [row] = await db.query(`
    UPDATE contacts 
    SET name = $1, email = $2, phone = $3, category_id = $4
    WHERE id = $5
    RETURNING *
    `, [name, email, phone, category_id, id]);

    return row;
  }

  async delete(id) {
   const deleteOp = await db.query(`
   DELETE FROM contacts 
   WHERE id = $1
   `, [id]);

   return deleteOp;
  }
}

module.exports = new ContactsRepository();
