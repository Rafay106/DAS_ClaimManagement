import db from "../config/db.js";

const getAllDesignation = async () => {
  const [rows] = await db.query("SELECT id, name, code FROM designation");

  return rows;
};

export { getAllDesignation };
