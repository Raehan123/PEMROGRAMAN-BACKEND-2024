import Student from "../models/Student.js";

class StudentController {
  // Mendapatkan seluruh resource
  
  async index(req, res) {
    try {
      const students = await Student.all();
      const data = {
        message: "Menampilkan data student",
        data: students,
      };
      res.status(200).json(data);
    } catch (error) {
      res.status(500).json({
        message: "Gagal menampilkan data student",
        error: error.message,
      });
    }
  }
  async store(req, res) {
    const { nama, nim, email, jurusan } = req.body;
    try {
      const newStudent = await Student.create({ nama, nim, email, jurusan });
      const data = {
        message: `Menambahkan data student ${nama}`,
        data: newStudent,
      };
      res.status(201).json(data);
    } catch (error) {
      res.status(500).json({
        message: "Gagal menambahkan data student",
        error: error.message,
      });
    }
  }

  async update(req, res) {
    const { id } = req.params;
    const { nama, nim, email, jurusan } = req.body;
    try {
      const updatedStudent = await Student.update(id, { nama, nim, email, jurusan });
      const data = {
        message: `Mengubah data student ${id}`,
        data: updatedStudent,
      };
      res.status(200).json(data);
    } catch (error) {
      res.status(500).json({
        message: "Gagal mengubah data student",
        error: error.message,
      });
    }
  }

  async destroy(req, res) {
    try {
      const { id } = req.params; // Mendapatkan ID dari parameter URL
      const deletedStudent = await Student.delete(id); // Menghapus student berdasarkan ID
      if (deletedStudent.affectedRows === 0) {
        return res.status(404).json({
          message: `Student dengan ID ${id} tidak ditemukan.`,
        });
      }
      const data = {
        message: `Menghapus data student dengan ID ${id}`,
        data: deletedStudent,
      };
      res.status(200).json(data);
    } catch (error) {
      res.status(500).json({
        message: "Gagal menghapus data student",
        error: error.message,
      });
    }
  }
  
}
// Membuat object StudentController
const object = new StudentController();

// Export object StudentController
export default object;