import db from "../config/db.js";

const selectUserById = async (id) => {
  const [[user]] = await db.query("SELECT * FROM user WHERE id = " + id);

  if (!user) return false;

  return user;
};

const selectUserByEmail = async (email) => {
  const [[user]] = await db.query(`SELECT * FROM user WHERE email = '${email}'`);

  if (!user) return false;

  return user;
};

export { selectUserById, selectUserByEmail };
