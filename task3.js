const students = ["Mikael", "Sarah", "Mikaya", "Budi", "Mamika"];

function cocok(namaSiswa, kataYangDicari) {
  const namaKecil = namaSiswa.toLowerCase();
  const cariNamaKecil = kataYangDicari.toLowerCase();

  return namaKecil.includes(cariNamaKecil);
}

function searchStudent(yangDicari, fungsiCallback) {
  const hasilCariNama = [];

  for (let i = 0; i < students.length; i++) {
    const nama = students[i];

    if (cocok(nama, yangDicari)) {
      hasilCariNama.push(nama);
    }
  }

  console.log("Hasil pencarian:", hasilCariNama);

  fungsiCallback(hasilCariNama);

  return hasilCariNama;
}
function countResults(hasil) {
  const jumlah = hasil.length;
  console.log("Jumlah hasil:", jumlah);
  return jumlah;
}
searchStudent("mika", countResults);
