const db = require("../config/db");

const getAllCities = async () => {
  const { rows } = await db.query("SELECT id, name FROM city ORDER BY name");
  return rows;
};

const getCitiesByState = async (stateID) => {
  const { rows } = await db.query(
    `SELECT id, name FROM city WHERE state_id = ${stateID} ORDER BY name`
  );

  return rows;
};

module.exports = { getAllCities, getCitiesByState };
