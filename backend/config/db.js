import mysql from "mysql2/promise";

const mysqlPool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "",
  database: "claim_management",
});

export default mysqlPool;
