const db = require("../config/db");

const getAllClaimStatus = async () => {
  const {rows} = await db.query("SELECT id, value FROM claim_status ORDER BY value");

  return rows;
};

module.exports = { getAllClaimStatus };
