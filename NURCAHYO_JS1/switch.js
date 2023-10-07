let hari = "Minggu";

switch (hari) {
    case "Senin" :
        console.log("Hari ini adalah awal pekan.");
        break;
    case "Selasa":
        console.log("Hari ini masih awal pekan.");
        break;
    case "Rabu":
        console.log("Hari ini pertengahan pekan.");
        break;
    case "Kamis":
    case "Jumat":
        console.log("Hari ini menjelang akhir pekan.");
        break;
    case "Sabtu":
    case "Minggu":
        console.log("Hari ini akhir pekan.");
        break;
    default:
        console.log("Mohon untuk memasukan hari diawali dengan huruf kapital.");
}