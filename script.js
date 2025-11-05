document.addEventListener('DOMContentLoaded', () => {

    // 1. Fungsi Simulasi Play Video
    window.playVideo = function() {
        alert("Simulasi memutar video. Dalam proyek nyata, ini akan membuka modal video atau memutar video.");
        // Logika nyata: mengganti thumbnail dengan iframe YouTube/Vimeo
        const videoWrapper = document.querySelector('.video-wrapper');
        // Contoh kode untuk mengganti:
        // videoWrapper.innerHTML = '<iframe width="100%" height="100%" src="YOUR_VIDEO_URL?autoplay=1" frameborder="0" allowfullscreen></iframe>';
    };

    // 2. Fungsi Simulasi Pengiriman Formulir (Opsional)
    const orderForm = document.getElementById('order-form');
    if (orderForm) {
        orderForm.addEventListener('submit', (event) => {
            event.preventDefault(); 
            alert("Pesanan Anda telah kami terima! Kami akan segera menghubungi Anda.");
            orderForm.reset(); 
        });
    }

    // 3. Fungsi Smooth Scroll untuk Tombol Back to Top (Opsional)
    const backToTop = document.querySelector('.back-to-top-button');
    if (backToTop) {
        backToTop.addEventListener('click', (e) => {
            e.preventDefault();
            document.getElementById('home').scrollIntoView({ behavior: 'smooth' });
        });
    }
});