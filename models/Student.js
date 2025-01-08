// import database
import db from "../config/database.js";

// membuat class Model Student
class Student {
  /**
   * Membuat method static all.
   */
  /**
   * TODO 1: Buat fungsi untuk insert data.
   * Method menerima parameter data yang akan diinsert.
   * Method mengembalikan data student yang baru diinsert.
   */
  static all() {
    return new Promise((resolve, reject) => {
      const query = "SELECT * FROM students";

      db.query(query, (err, results) => {
        if (err) {
          reject(err); 
        } else {
          resolve(results);
        }
      });
    });
  }

  static create(data) {
    const { nama, nim, email, jurusan } = data;

    if (!nama || !nim || !email || !jurusan) {
      throw new Error("Semua data harus dikirim");
    } else {
      return new Promise((resolve, reject) => {
        const sql = "INSERT INTO students SET ?";

        db.query(sql, data, (err, results) => {
          if (err) {
            reject(err);
          } else {
            resolve(results);
          }
        });
      });
  }

    
  }

  static update(id, data) {
    return new Promise((resolve, reject) => {
      const sql = "UPDATE students SET ? WHERE id = ?";
      db.query(sql, [data, id], (err, results) => {
        if (err) {
          reject(err);
        } else {
          resolve(results);
        }
      });
    });
  }

  static delete(id) {
    return new Promise((resolve, reject) => {
      const sql = "DELETE FROM students WHERE id = ?";
      db.query(sql, id, (err, results) => {
        if (err) {
          reject(err);
        } else {
          resolve(results);
        }
      });
    });
  }

  static find(id) {
    return new Promise((resolve, reject) => {
      const sql = "SELECT * FROM students WHERE id = ?";

      db.query(sql, id, (err, results) => {
        if (err) {
          reject(err);
        } else {
          resolve(results);
        }
      });
    });
  }
}

// export class Student
export default Student;
