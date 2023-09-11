import db from "../config/db.js";

const getAllClaimStatus = async () => {
  const [rows] = await db.query("SELECT id, value FROM claim_status");

  return rows;
};

export { getAllClaimStatus };
