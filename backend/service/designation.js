const db = require("../config/db");

const getAllDesignation = async () => {
  const [rows] = await db.query("SELECT id, name, code FROM designation");

  return rows;
};

module.exports = { getAllDesignation };
