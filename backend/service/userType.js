const db = require("../config/db");

const selectAllUserTypes = async () => {
  const {rows} = await db.query("SELECT id, name FROM user_type ORDER BY name");

  return rows;
};

module.exports = { selectAllUserTypes };
