import db from "../config/database.js"; // Contoh koneksi ke database

class Student {
  static all() {
    return new Promise((resolve, reject) => {
      db.query("SELECT * FROM students", (err, results) => {
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
    return new Promise((resolve, reject) => {
      db.query(
        "INSERT INTO students (nama, nim, email, jurusan) VALUES (?, ?, ?, ?)",
        [nama, nim, email, jurusan],
        (err, result) => {
          if (err) {
            reject(err);
          } else {
            resolve({ id: result.insertId, ...data });
          }
        }
      );
    });
  }

  static update(id, data) {
    const { nama, nim, email, jurusan } = data;
    return new Promise((resolve, reject) => {
      db.query(
        "UPDATE students SET nama = ?, nim = ?, email = ?, jurusan = ? WHERE id = ?",
        [nama, nim, email, jurusan, id],
        (err, result) => {
          if (err) {
            reject(err);
          } else {
            resolve({ id, ...data });
          }
        }
      );
    });
  }

  static delete(id) {
    return new Promise((resolve, reject) => {
      db.query("DELETE FROM students WHERE id = ?", [id], (err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      });
    });
  }
}

export default Student;
