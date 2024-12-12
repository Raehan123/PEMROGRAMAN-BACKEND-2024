/**
 * Fungsi untuk menampilkan hasil download
 * @param {string} result - Nama file yang didownload
 */
const showDownload = (result) => {
  console.log("Download selesai");
  console.log(`Hasil Download: ${result}`);
}

/**
 * Fungsi untuk download file
 * @param {function} callback - Function callback show
 */

const download = () => {
  return new Promise((resolve) => {
    setTimeout(function () {
      const result = "windows-10.exe";
      resolve(result);
    }, 5000);
    
  })
}

const main = async () => {
  try {
    const result = await download();
    showDownload(result);
  } catch (error) {
    console.log("Terjadi kesalahan saat mendownload : ", error);
  }
}

main();
/**
 * TODO:
 * - Refactor callback ke Promise atau Async Await
 * - Refactor function ke ES6 Arrow Function
 * - Refactor string ke ES6 Template Literals
 */
