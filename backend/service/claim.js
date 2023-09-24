import db from "../config/db.js";
import { getDateTime } from "../utils/fnCommon.js";

const serviceGetClaims = async (userId, statusId) => {
  const [[{ code }]] = await db.query(
    `SELECT designation.code FROM user, employee, designation
    WHERE user.employee_id = employee.id
    AND employee.designation_id = designation.id
    AND user.id = ${parseInt(userId)}`
  );

  const [rows] = await db.query(
    `SELECT claim.id as claimId,
            claim.claim_for as claimFor, 
            claim.bill_date as billDate, 
            claim.amount as amt, 
            claim_status.id as claimStatusId,
            claim_status.value as claimStatus,
            claimer.name as claimer,
            claim.comment
    FROM claim, employee as claimer, designation, claim_status
    WHERE claim.claimer_id = claimer.id
    AND claimer.designation_id = designation.id
    AND claim.status_id = claim_status.id
    AND designation.code > ${code}
    AND claim.status_id = ${statusId}`
  );

  return rows;
};

const serviceGetAllClaims = async () => {
  const [rows] = await db.query(
    `SELECT claim.id as claimId, 
            claim.claim_for as claimFor, 
            claim.bill_date as billDate, 
            claim.amount as amt, 
            claim_status.value as claimStatus,
            claimer.name as claimer,
            claim.comment
    FROM claim, employee as claimer, designation, claim_status
    WHERE claim.claimer_id = claimer.id
    AND claimer.designation_id = designation.id
    AND claim.status_id = claim_status.id`
  );

  return rows;
};

const serviceProcessClaim = async (claimId, userId, statusId) => {
  const [res] = await db.query(
    `SELECT approver.name, designation.code
    FROM employee as approver, user, designation
    WHERE user.id = approver.id
    AND approver.designation_id = designation.id
    AND user.id = ${userId}`
  );
  console.log(res)
  return res;
};

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

export { serviceGetClaims, serviceGetAllClaims, serviceCreateClaim, serviceProcessClaim };
