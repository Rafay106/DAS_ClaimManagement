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

const serviceGetAllClaims = async (userId) => {
  const [[user]] = await db.query(
    `SELECT designation.code FROM user, employee, designation
    WHERE user.employee_id = employee.id
    AND employee.designation_id = designation.id
    AND user.id = ${parseInt(userId)}`
  );

  if (!user) return { statusCode: 404, body: "User not found!" };

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
    AND designation.code > ${user.code}`
  );

  return { statusCode: 200, body: rows };
};

const serviceProcessClaim = async (claimId, userId, statusId) => {
  const [[approver]] = await db.query(
    `SELECT approver.id as approverId, designation.code
    FROM employee as approver, user, designation
    WHERE user.id = approver.id
    AND approver.designation_id = designation.id
    AND user.id = ${userId}`
  );

  const [[claimer]] = await db.query(
    `SELECT claimer.id as claimerId, designation.code
    FROM claim, employee as claimer, designation
    WHERE claim.id = ${claimId}
    AND claim.claimer_id = claimer.id
    AND claimer.designation_id = designation.id`
  );

  if (approver.code >= claimer.code) {
    return {
      statusCode: 401,
      message: "You are not authorized to process this claim",
    };
  }

  const [res] = await db.query(
    `UPDATE claim
    SET status_id = ${parseInt(statusId)}, approver_id = ${approver.approverId}
    WHERE id = ${claimId}`
  );

  return {
    statusCode: 200,
    affectedRows: res.affectedRows,
  };
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

const serviceCountClaim = async () => {
  const [[{ pending }]] = await db.query(
    `SELECT count(*) AS pending FROM claim WHERE status_id=1`
  );
  const [[{ approved }]] = await db.query(
    `SELECT count(*) AS approved FROM claim WHERE status_id=2`
  );
  const [[{ rejected }]] = await db.query(
    `SELECT count(*) AS rejected FROM claim WHERE status_id=3`
  );
  const [[{ crpending }]] = await db.query(
    `SELECT count(*) AS crpending FROM claim WHERE status_id=4`
  );

  return {
    pending,
    approved,
    rejected,
    crpending,
  };
};

export {
  serviceGetClaims,
  serviceGetAllClaims,
  serviceCreateClaim,
  serviceProcessClaim,
  serviceCountClaim,
};
