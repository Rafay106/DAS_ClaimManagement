import db from "../config/db.js";
import { getDateTime } from "../utils/fnCommon.js";

const serviceGetClaimsNotApproved = async (userID) => {
  const [[{ code }]] = await db.query(
    `SELECT designation.code FROM user, employee, designation
    WHERE user.employee_id = employee.id
    AND employee.designation_id = designation.id
    AND user.id = ${parseInt(userID)}`
  );

  const [rows] = await db.query(
    `SELECT claim.id as claimId, 
            claim.claim_for as claimFor, 
            claim.bill_date as billDate, 
            claim.amount as amt, 
            claim_status.value as claimStatus,
            employee.id as eid, 
            employee.name as ename 
    FROM claim, employee, designation, claim_status
    WHERE claim.claimer_id = employee.id
    AND employee.designation_id = designation.id
    AND claim.status_id = claim_status.id
    AND designation.code > ${code}
    AND claim.status_id != 2`
  );

  return rows;
};

const serviceGetAllClaimsNotApproved = async () => {
  const [rows] = await db.query(
    `SELECT claim.id as claimId, 
            claim.claim_for as claimFor, 
            claim.bill_date as billDate, 
            claim.amount as amt, 
            claim_status.value as claimStatus,
            employee.id as eid, 
            employee.name as ename 
    FROM claim, employee, designation, claim_status
    WHERE claim.claimer_id = employee.id
    AND employee.designation_id = designation.id
    AND claim.status_id = claim_status.id`
  );

  return rows;
}

const serviceCreateClaim = async (claim) => {
  const [res] = await db.query(
    `INSERT INTO claim
      (claim_for, bill_date, bill_no, amount, submit_date, place, claimer_id, comment) 
    VALUES (
      '${claim.claimFor}', 
      '${claim.billDate}', 
      '0123456789', 
      ${parseFloat(claim.amt)}, 
      '${getDateTime()}', 
      ${parseInt(claim.place)},
      ${parseInt(claim.claimerId)}, 
      '${claim.comment}'
    );`
  );
  return res;
};

export { serviceGetClaimsNotApproved,serviceGetAllClaimsNotApproved, serviceCreateClaim };
