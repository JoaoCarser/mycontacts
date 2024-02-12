const {Client} = require('pg');

const client = new Client({
    host: 'codespaces-4988c2',
    port: '5432',
    user: 'root',
    password: 'root',
    database: 'mycontacts',
});

client.connect();


exports.query = async (query) => {
    const { rows } = await client.query(query);
    return rows;
}