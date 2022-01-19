const Pool = require("pg").Pool;

const pool = new Pool({
  user: "postgres",
  password: "roots",
  host: "localhost",
  port: 5432,
  database: "justiceleague",
});

module.exports = pool;
