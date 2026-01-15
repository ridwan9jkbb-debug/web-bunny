const profileImg = document.getElementById('profileImg');
const dropdownMenu = document.getElementById('dropdownMenu');

profileImg.addEventListener('click', function(e) {
    e.stopPropagation();
    // Toggle tampil/sembunyi
    if (dropdownMenu.style.display === 'block') {
        dropdownMenu.style.display = 'none';
    } else {
        dropdownMenu.style.display = 'block';
    }
});

// Tutup jika klik di luar foto
window.addEventListener('click', function() {
    dropdownMenu.style.display = 'none';
});document.addEventListener('DOMContentLoaded', () => {
    const questButtons = document.querySelectorAll('.btn-quest');

    questButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Ambil elemen kartu induknya
            const kartu = this.parentElement;
            const statusText = kartu.querySelector('.status-text');

            // Ubah tampilan kartu menjadi redup (tanda selesai)
            kartu.style.opacity = '0.5';
            kartu.style.borderLeftColor = '#2ecc71'; // Berubah jadi hijau
            
            // Ubah teks tombol dan status
            this.innerText = 'Completed!';
            this.style.background = '#2ecc71';
            this.disabled = true; // Agar tidak bisa diklik lagi

            if (statusText) {
                statusText.innerText = 'Status: Selesai';
                statusText.style.color = '#2ecc71';
            }

            // Efek suara (opsional) atau notifikasi
            console.log('Quest Selesai! EXP Bertambah.');
        });
    });
});