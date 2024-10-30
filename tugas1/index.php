<?php

class Animal
{
    // Property animals (array)
    public $animals;

    // Constructor untuk mengisi data awal animals
    public function __construct()
    {
        $this->animals = ['Ayam', 'Ikan'];
    }

    // Method untuk menampilkan seluruh data animals
    public function index()
    {
        foreach ($this->animals as $animal) {
            echo $animal . "<br/>";
        }
    }

    // Method untuk menambahkan hewan baru
    public function store($animal)
    {
        if (is_string($animal)) {
            array_push($this->animals, $animal);
        }
    }

    // Method untuk memperbarui data hewan
    public function update($index, $newAnimal)
    {
        if (isset($this->animals[$index])) {
            $this->animals[$index] = $newAnimal;
        }
    }

    // Method untuk menghapus data hewan
    public function destroy($index)
    {
        if (isset($this->animals[$index])) {
            array_splice($this->animals, $index, 1);
        }
    }
}

$animal = new Animal();

// Menampilkan seluruh data animals
echo 'Index - Menampilkan seluruh data hewan <br/>';
$animal->index();

print_r($animal->animals);
echo PHP_EOL;
echo '<br/>';

// Menambahkan hewan baru
echo 'Store - Menambahkan data hewan baru <br/>';
$animal->store('Burung');
$animal->index();

print_r($animal->animals);
echo PHP_EOL;
echo '<br/>';


// Memperbarui data hewan
echo 'Update - Mengupdate data hewan <br/>';
$animal->update(0, 'Kucing Anggora');
$animal->index();

print_r($animal->animals);
echo PHP_EOL;
echo '<br/>';


// Menghapus data hewan
echo 'Destroy - Menghapus data hewan <br/>';
$animal->destroy(1);
$animal->index();


print_r($animal->animals);
echo PHP_EOL;
