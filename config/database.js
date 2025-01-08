import mysql from "mysql";
import dotenv from "dotenv";

dotenv.config();


const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "student_api",
});

db.connect((err) => {
  if (err) {
    console.error("Error connecting: " + err.stack);
    return;
  }
  console.log("Connected to database");
});

export default db;
