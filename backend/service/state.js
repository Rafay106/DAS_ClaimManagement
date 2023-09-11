import db from "../config/db.js";

const getAllStates = async () => {
  const [rows] = await db.query("SELECT id, name FROM state");

  return rows;
};

export { getAllStates };
