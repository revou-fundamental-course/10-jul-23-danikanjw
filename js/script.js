//Function menghitung BMI
function hitungbmi() {
    let weight = document.getElementById('bmiWeight').value;
    let height = document.getElementById('bmiHeight').value/100;
    let age = document.getElementById('bmiAge').value;
    let gender = document.querySelector('input[name="gender"]:checked');

    //Memastikan semua kolom telah diisi
    if (!gender || !gender.value || weight === "" || age === "" ) {
        alert("Harap isi semua kolom!");
        return false;
    }

    if (height === "" || height <= 0) {
        alert("Harap isi semua kolom!");
        return false;
    }

    //Memastikan umur yang dimasukkan 18 ke atas
    if (age < 18) {
        alert("Kalkulator hanya untuk 18 tahun ke atas");
        return false
    }

    //Rumus BMI
    let bmi = weight / (height * height);
        // Menampilkan hasil BMI dan keterangan sesuai kategori BMI
        document.getElementById("contenthasil").style.display = "block";
        document.getElementById("contentunderweight").style.display = "none";
        document.getElementById("contentoverweight").style.display = "none";
        document.getElementById("hasilBMI").innerHTML = bmi.toFixed(1).toString();
            if (bmi < 18.5) {
                document.getElementById("hasilKualitas").innerHTML = "Berat Badan Kurang";
                document.getElementById("hasilKet").innerHTML = "Anda kekurangan berat badan";
                document.getElementById("saranBMI").innerHTML = "Anda berada dalam kategori kekurangan berat badan. <br /> Hubungi dokter lebih lanjut mengenai pola makan dan gizi yang baik untuk meningkatkan kesehatan.";
                document.getElementById("kualitasBMI").innerHTML = "Hasil BMI < 18.5";
                document.getElementById("contentunderweight").style.display = "block";
            } else if (bmi < 24.9) {
                document.getElementById("hasilKualitas").innerHTML = "Normal";
                document.getElementById("hasilKet").innerHTML = "Anda memiliki berat badan ideal.<br />Good job!!";
                document.getElementById("saranBMI").innerHTML = "Anda berada dalam kategori berat badan yang normal. <br /> Tetap pertahankan berat badan Anda dan jaga berat badan Anda dengan mengatur keseimbangan antara pola makan dan aktivitas fisik Anda. ";
                document.getElementById("kualitasBMI").innerHTML = "Hasil BMI diantara 18.5 dan 24.9";
            } else if (bmi < 29.9) {
                document.getElementById("hasilKualitas").innerHTML = "Berat Badan Lebih";
                document.getElementById("hasilKet").innerHTML = "Anda memiliki berat badan berlebih";
                document.getElementById("saranBMI").innerHTML = "Anda berada dalam kategori overweight atau berat badan berlebih. <br /> Cara terbaik untuk menurunkan berat badan adalah dengan mengatur kalor makanan yang dikonsumsi dan berolahraga.  <br /> Jika BMI Anda berada dalam kategori ini maka Anda dianjurkan untuk menurunkan berat badan hingga batas normal.";
                document.getElementById("kualitasBMI").innerHTML = "Hasil BMI diantara 25 dan 29.9 ";
                document.getElementById("contentoverweight").style.display = "block";
            } else {
                document.getElementById("hasilKualitas").innerHTML = "Obesitas";
                document.getElementById("hasilKet").innerHTML = "Anda berada dalam kategori obesitas";
                document.getElementById("saranBMI").innerHTML = "Anda berada dalam kategori obesitas. <br /> Usahakan untuk menurunkan berat badan dan menerapkan pola hidup sehat dengan menjaga makan dan aktivitas fisik. <br /> Segera kunjungi dokter untuk dilakukan pemeriksaan kesehatan lanjutan untuk mengetahui risiko yang Anda miliki terkait berat badan Anda.";
                document.getElementById("kualitasBMI").innerHTML = "Hasil BMI lebih dari 30";
                document.getElementById("contentoverweight").style.display = "block";
            }
}

//Function reset isi form dan kembali menyembunyikan konten hasil
function clearbmi() {
    let clearbmi = document.getElementById("frmbmi");
    clearbmi.reset();
    document.getElementById("contenthasil").style.display = "none";
    document.getElementById("contentoverweight").style.display = "none";
    document.getElementById("contentunderweight").style.display = "none";
    document.getElementById("hasilKualitas").innerHTML = "";
    document.getElementById("hasilKet").innerHTML = "";
    document.getElementById("saranBMI").innerHTML = "";
    document.getElementById("kualitasBMI").innerHTML = "";
    document.getElementById("hasilBMI").innerHTML = "";
}

//Function agar form hanya menerima input angka
function OnlyNumbers(event) {
    var charCode = (event.which) ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;
}
 

    
