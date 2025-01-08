// import Model Student
import Student from "../models/Student.js";

class StudentController {
  // menambahkan keyword async
  async index(req, res) {
    const students = await Student.all();

    if (students.length > 0) {
      const data = {
        message: "Menampilkan data student",
        data: students,
      };

      res.status(200).json(data);
    } else {
      const data = {
        message: "Data is empty",
      };

      res.status(200).json(data);
    }
  }

  async store(req, res) {
    /**
     * TODO 2: memanggil method create.
     * Method create mengembalikan data yang baru diinsert.
     * Mengembalikan response dalam bentuk json.
     */
    // code here
    const { nama, nim, email, jurusan } = req.body;

    // jika data undefined maka kirim response error
    if (!nama || !nim || !email || !jurusan) {
      const data = {
        message: "Semua data harus dikirim",
      };
      return res.status(422).json(data);
    } else {
      const student = await Student.create(req.body);

      const data = {
        message: "Menambahkan data student",
        data: student,
      };

      res.status(201).json(data);
    }
  }

  async update(req, res) {
    const { id } = req.params;
    // cari id student yang ingin di update
    const student = await Student.find(id);
    if (student) {
      const student = await Student.update(id, req.body);
      const data = {
        message: `Mengedit data student`,
        data: student,
      };
      res.status(200).json(data);
    } else {
      const data = {
        message: `Student not found`,
      };

      res.status(400).json(data);
    }
  }

  async destroy(req, res) {
    const { id } = req.params;
    const student = await Student.find(id);

    if (student) {
      await Student.delete(id);
      const data = {
        message: `Menghapus student id ${id}`,
      };
      res.status(200).json(data);
    } else {
      const data = {
        message: "Student not found",
      };

      res.status(404).json(data);
    }
  }

  async show(req, res) {
    const { id } = req.params;
    // cari student berdasarkan id
    const student = await Student.find(id);

    if (student) {
      const data = {
        message: `Menampilkan data student id ${id}`,
        data: student,
      };
      res.status(200).json(data);
    } else {
      const data = {
        message: "Student not found",
      };
      res.status(404).json(data);
    }
  }
}

// Membuat object StudentController
const object = new StudentController();

// Export object StudentController
export default object;