const zoomSlider = document.getElementById('zoomSlider');
const moonStage = document.getElementById('moonStage');
const moonFace = document.getElementById('moonFace');

function updateTelescopeView() {
    const zoomValue = parseFloat(zoomSlider.value);

    // 1. Zoom gambar bulan & wajah sekaligus
    moonStage.style.transform = `scale(${zoomValue})`;

    // 2. Logika kemunculan wajah:
    // Pada zoom 1.0 -> Opacity = 0 (Sama sekali tidak terlihat)
    // Pada zoom 1.5 -> Mulai terlihat samar-samar
    // Pada zoom 5.0 atau lebih -> Opacity = 1 (Terlihat jelas sempurna)
    
    const minZoom = 1.0;
    const maxZoomForFace = 5.0; // Angka zoom ketika wajah sudah 100% jelas

    let opacity = (zoomValue - minZoom) / (maxZoomForFace - minZoom);

    // Batasi nilai opacity agar berada di rentang 0 sampai 1
    if (opacity < 0) opacity = 0;
    if (opacity > 1) opacity = 1;

    // Terapkan opacity ke foto wajah pacar
    moonFace.style.opacity = opacity;
}

// Jalankan fungsi setiap slider digeser
zoomSlider.addEventListener('input', updateTelescopeView);

// Inisialisasi tampilan awal saat halaman pertama dimuat
updateTelescopeView();