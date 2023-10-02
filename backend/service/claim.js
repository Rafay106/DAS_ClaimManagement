const db = require("../config/db");
const { getDateTime } = require("../utils/fnCommon");

const selectClaimById = async (claimId) => {
  const { rows } = await db.query(
    `SELECT C.ID,
      C.CLAIM_FOR,
      C.BILL_DATE,
      C.AMOUNT,
      C.SUBMIT_DATE,
      CI.NAME AS CITY,
      C.LAST_ACTION_DATE,
      CM.NAME AS CLAIMER,
      CM.EMAIL AS CLAIMER_EMAIL,
      MR.NAME AS MANAGER,
      MR.EMAIL AS MANAGER_EMAIL,
      CS.VALUE AS STATUS,
      C.COMMENTS,
      C.REMARKS
    FROM CLAIM C
    JOIN CITY CI ON C.PLACE = CI.ID
    JOIN EMPLOYEE CM ON C.CLAIMER_ID = CM.ID
    LEFT JOIN EMPLOYEE MR ON C.MANAGER_ID = MR.ID
    JOIN CLAIM_STATUS CS ON C.STATUS_ID = CS.ID
    WHERE C.ID = ${claimId}
    ORDER BY C.SUBMIT_DATE DESC`
  );

  return rows[0];
};

const selectUserClaims = async (userId, statusId) => {
  let query = `SELECT C.ID,
                C.CLAIM_FOR,
                C.BILL_DATE,
                C.AMOUNT,
                C.SUBMIT_DATE,
                CI.NAME AS CITY,
                C.LAST_ACTION_DATE,
                CM.NAME AS CLAIMER,
                CM.EMAIL AS CLAIMER_EMAIL,
                MR.NAME AS MANAGER,
                MR.EMAIL AS MANAGER_EMAIL,
                CS.VALUE AS STATUS,
                C.COMMENTS,
                C.REMARKS
              FROM CLAIM C
              JOIN CITY CI ON C.PLACE = CI.ID
              JOIN EMPLOYEE CM ON C.CLAIMER_ID = CM.ID
              LEFT JOIN EMPLOYEE MR ON C.MANAGER_ID = MR.ID
              JOIN CLAIM_STATUS CS ON C.STATUS_ID = CS.ID
              WHERE CM.ID = ${userId}`;
  if (statusId) query += ` AND CS.ID = ${statusId}`;

  query += " ORDER BY C.SUBMIT_DATE DESC";

  const { rows } = await db.query(query);

  if (rows.length > 0) return rows;

  return false;
};

const serviceGetClaims = async (userId, statusId) => {
  const [[user]] = await db.query(
    `SELECT designation.code FROM user, employee, designation
    WHERE user.employee_id = employee.id
    AND employee.designation_id = designation.id
    AND user.id = ${parseInt(userId)}`
  );
  if (!user)
    return {
      statusCode: 404,
      body: `User with id: ${userId} not found!`,
    };

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
    AND designation.code > ${user.code}
    AND claim.status_id = ${statusId}`
  );

  return {
    statusCode: 200,
    body: rows,
  };
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
  const res = await db.query(
    `INSERT INTO claim
      (claim_for, bill_date, bill_no, amount, submit_date, place, claimer_id, comments) 
    VALUES (
      '${claim.claimFor}', 
      '${claim.billDate}', 
      '0123456789', 
      ${parseFloat(claim.amount)}, 
      '${getDateTime()}', 
      ${parseInt(claim.place)},
      ${parseInt(claim.claimerId)}, 
      '${JSON.stringify({ dt: new Date(), msg: claim.comment })}'
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

module.exports = {
  selectClaimById,
  selectUserClaims,
  serviceGetClaims,
  serviceGetAllClaims,
  serviceCreateClaim,
  serviceProcessClaim,
  serviceCountClaim,
};
