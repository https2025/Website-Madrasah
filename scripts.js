document.addEventListener('DOMContentLoaded', () => {
    console.log('Website Siap!');

    const searchButton = document.getElementById('search-button');
    const searchInput = document.getElementById('search-input');
    searchButton.addEventListener('click', () => {
        const query = searchInput.value.toLowerCase();
        const sections = document.querySelectorAll('main section');
        sections.forEach(section => {
            if (section.textContent.toLowerCase().includes(query)) {
                section.style.display = 'block';
            } else {
                section.style.display = 'none';
            }
        });
        if (!found) {
            alert('Maaf, tidak ditemkan hasil untuk pencarian anda.');
        }
    });
    searchInput.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
            searchButton.click();
        }
    });

    // Berita
    const newSection = document.getElementById('latest-news');
    const newsData = [
        { title: 'Kegiatan Pramuka', content: 'Pramuka diadakan setip hari saptu.' },
        { title: 'Basar', content: 'Basar besar-besaran di Benteng Rotterdam bersama Seluruh Sekolah (Madrasah) Di Makassar.' },
        { title: 'Tidak ada kegiatan hari ini', content: 'Tidak ada kegiatan hari ini.' }
    ];

    newsData.forEach(news => {
        const newsArticle = document.createElement('article');
        newsArticle.innerHTML = `<h3>${news.title}<h3><p>${news.content}<p>`;
        newSection.appendChild(newsArticle);
    });

// laci navigasi
menuToggle.addEventListener('click', () => {
    if (drawerNav.style.left === '0px') {
        drawerNav.style.left = '-250px';
    } else {
        drawerNav.style.left = '0px';
        }
    });
});
