<?php

namespace App\Http\Controllers;

use App\Models\Student;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;


class StudentController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $students = Student::all();

        $data = [
            'message' => 'Get all resource student',
            'data' => $students
        ];
        return response()->json($data, 200);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $input = [
            'nama' => $request->nama,
            'nim' => $request->nim,
            'email' => $request->email,
            'jurusan' => $request->jurusan,
        ];

        $students = Student::create($input);

        $data = [
            'message' => 'Student is create success!!',
            'data' => $students,
        ];

        return response()->json($data, 200);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
         // Cari data student berdasarkan ID
    $student = Student::find($id);
        if(!$student) {
        return response()->json([
            'message' => 'Siswa Tidak Ditemukan'
        ], 404);
    }

    // Update field student dengan data baru dari request
    $student->update([
        'id' => $request->id,
        'nama' => $request->nama,
        'nim' => $request->nim,
        'email' => $request->email,
        'jurusan' => $request->jurusan,
    ]);

    // Membuat respon setelah update berhasil
    $data = [
        'message' => 'Student update success!!',
        'data' => $student,
    ];

    return response()->json($data, 200);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $student = Student::find($id);

        $student->delete();

        $data = [
            'message' => 'Student delete success!!',
            'data' => $student,
        ];

        return response()->json($data, 200);
    }
}
