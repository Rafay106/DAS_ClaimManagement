const db = require("../config/db");

const selectUserById = async (id) => {
  const { rows } = await db.query(`
  SELECT u.id,
    u.name,
    u.email,
    t.name AS type,
    i.id AS isu_id,
    i.name AS isu,
    d.id AS du_id,
    d.name AS du
  FROM users u
  JOIN user_type t ON u.user_type_id = t.id
  JOIN employee e ON u.employee_id = e.id
  JOIN isu i ON e.isu_id = i.id
  JOIN du d ON i.du_id = d.id
  WHERE u.id = '${id}'
  `);

  if (rows.length === 0) return false;

  return rows[0];
};

const selectUserByEmail = async (email) => {
  const { rows } = await db.query(`
  SELECT u.id,
    u.name,
    u.email,
    u.hash,
    t.name AS type,
    i.name AS isu,
    d.name AS du
  FROM users u
  JOIN user_type t ON u.user_type_id = t.id
  JOIN employee e ON u.employee_id = e.id
  JOIN isu i ON e.isu_id = i.id
  JOIN du d ON i.du_id = d.id
  WHERE u.email = '${email}'
  `);

  if (rows.length === 0) return false;

  return rows[0];
};

module.exports = { selectUserById, selectUserByEmail };
