function nilai() {
 let nilai = 100;
 let nama = "Nurcahyo"
 if (nilai > 80 && nilai <= 100) {
    console.log(`Selamat ${nama}, nilai anda ${nilai}, mohon dipertahankan ya! Semangat!`);
 }   else if(nilai >= 50 && nilai <= 80){
    console.log(`Selamat ${nama}, nilai anda ${nilai}, mohon untuk ditingkatkan ya! Semangat!`);
 } else{
    console.log(`Maaf ${nama}, nilai anda ${nilai}, mohon untuk belajar lagi ya! Semangat!`);
 }
}

nilai();