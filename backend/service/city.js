const db = require("../config/db");

const getAllCities = async () => {
  const [rows] = await db.query("SELECT id, name FROM city");

  return rows;
};

const getCitiesByState = async (stateID) => {
  const [rows] = await db.query(
    "SELECT id, name FROM city WHERE state_id = " + stateID
  );

  return rows;
};

module.exports = { getAllCities, getCitiesByState };
