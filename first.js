document.addEventListener('DOMContentLoaded', function() {
    const images = [
        'aaa.jfif',
        'aaaa.webp',
        's.webp',
        'aaaaa.webp',
        'a.jfif',
        'b.jfif',
        'c.jpg',
        'd.jpg',
        'ejpg.jpg',
        'm.jpg',
        'f.jpg',
        'g.jpg',
        'h.jpg',
        'ijpeg.jpeg',
        'k.jpg',
        'p.jpg',
        'q.webp',
        'r.webp',
        't.jpg',
        'u.jpg',
        'u.webp',
        'n.jpg',
        'v.jpg'
        
    ];

    let currentIndex = 0;
    const galleryImage = document.getElementById('gallery-image');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');

    function updateGallery() {
        galleryImage.src = images[currentIndex];
    }

    prevBtn.addEventListener('click', function() {
        currentIndex = (currentIndex > 0) ? currentIndex - 1 : images.length - 1;
        updateGallery();
    });

    nextBtn.addEventListener('click', function() {
        currentIndex = (currentIndex < images.length - 1) ? currentIndex + 1 : 0;
        updateGallery();
    });

    // عرض الصورة الأولى عند تحميل الصفحة
    updateGallery();
});

