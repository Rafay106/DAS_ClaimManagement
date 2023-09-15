import db from "../config/db.js";
import { getDateTime } from "../utils/fnCommon.js";

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

const serviceCreateClaim = async (claim) => {
  const res = await db.query(
    `INSERT INTO claim
      (claim_for, bill_date, bill_no, amount, submit_date, place, claimer_id, comment) 
    VALUES (
      '${claim.claimFor}', 
      '${claim.billDate}', 
      '0123456789', 
      ${claim.amt}, 
      '${getDateTime()}', 
      ${parseInt(claim.place)},
      ${parseInt(claim.claimerID)}, 
      '${claim.comment}'
    );`
  );
};

export { serviceGetClaims, serviceCreateClaim };
