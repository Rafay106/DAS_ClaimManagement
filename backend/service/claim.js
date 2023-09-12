import db from "../config/db.js";

const serviceGetClaims = async (userID) => {
  const [[{ code }]] = await db.query(
    `SELECT designation.code FROM user, employee, designation
    WHERE user.employee_id = employee.id
    AND employee.designation_id = designation.id
    AND user.id = ${parseInt(userID)}`
  );

  const [rows] = await db.query(
    `SELECT * FROM claim, employee, designation
    WHERE claim.claimer_id = employee.id
    AND employee.designation_id = designation.id
    AND designation.code > ${code}`
  );

  return rows;
};

export { serviceGetClaims };
