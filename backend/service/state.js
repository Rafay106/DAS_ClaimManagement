const db = require("../config/db");

const getAllStates = async () => {
  const {rows} = await db.query("SELECT id, name FROM state ORDER BY name");

  return rows;
};

module.exports = { getAllStates };
