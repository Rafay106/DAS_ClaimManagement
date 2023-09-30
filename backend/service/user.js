const db = require("../config/db");

const selectUserById = async (pk) => {
  const {rows} = await db.query("SELECT * FROM users WHERE pk = " + pk);

  if (rows.length === 0) return false;

  return rows[0];
};

const selectUserByEmail = async (email) => {
  const {rows} = await db.query(`SELECT * FROM users WHERE email = '${email}'`);

  if (rows.length === 0) return false;

  return rows[0];
};

module.exports = { selectUserById, selectUserByEmail };
