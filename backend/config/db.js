const Pool = require("pg").Pool;

const pool = new Pool({
  user: String(process.env.DB_USER),
  password: String(process.env.DB_PASS),
  port: parseInt(process.env.DB_PORT),
  database: String(process.env.DB_NAME),
});

module.exports = pool;
