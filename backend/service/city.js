import db from "../config/db.js";

const getAllCities = async (stateID) => {
  const [rows] = await db.query(
    "SELECT id, name FROM city WHERE state_id = " + stateID
  );

  return rows;
};

export { getAllCities };
