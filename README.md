# Makanye Ngaji

adalah platform qur'an digital yang dibuat dengan tujuan menyadarkan kaum muslim khususnya di Indonesia untuk membiasakan ngaji setiap hari. Dan juga kaum muslim yang sedang tidak tenang hatinya , ditegur "Makanye Ngaji" agar tenang.

# API Quran

[Link](https://api.quran.sutanlab.id/)

[Github](http://github.com/sutanlab/quran-api/)

# API Hadist

untuk saat ini baru tersedia API hadist arbain, insya allah akan tersedia API hadist yang lain

### get semua sub hadist arbain

[Link](https://makanyengaji.vercel.app/hadist/arbain.json)

### get per slug, contoh:

[Link](http://makanyengaji.vercel.app/hadist/arbain/amalan-bergantung-pada-niat.json)

## Ingin berkontribusi ?

semua data ada di _\_posts.js_ masing masing folder, contohnya antum bisa menambahkan data hadist lain dengan menambahkan folder di _/src/routes/hadist_, lalu menambahkan pathnya di _/src/routes/\_hadist.js_,
dan terakhir menambahkan navigasi di _/src/componentes/header.svelte_ pada variabel routes tepatnya.

bingung ? coba baca dokumentasi [disini](https://sapper.svelte.dev/docs#File_naming_rules) untuk lebih mudah kontribusi nantinya.

*Barakallahufiikum.*
