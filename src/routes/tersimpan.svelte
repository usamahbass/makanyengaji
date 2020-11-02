<script>
  import { isSaved } from "../store.js";
  import List from "../components/list.svelte";

  let tersimpan = [];

  isSaved.subscribe((saved) => (tersimpan = saved));
</script>

<svelte:head>
  <!-- Primary Meta Tags -->
  <title>Tersimpan - Makanye Ngaji</title>
  <meta name="title" content="Tersimpan - Makanye Ngaji" />
  <meta
    name="description"
    content="adalah platform qur'an digital yang dibuat dengan tujuan menyadarkan kaum muslim khususnya di Indonesia untuk membiasakan ngaji setiap hari. Dan juga kaum muslim yang sedang tidak tenang hatinya , ditegur 'Makanye Ngaji' agar tenang." />

  <!-- Open Graph / Facebook -->
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://makanyengaji.vercel.app/" />
  <meta property="og:title" content="Tersimpan - Makanye Ngaji" />
  <meta
    property="og:description"
    content="adalah platform qur'an digital yang dibuat dengan tujuan menyadarkan kaum muslim khususnya di Indonesia untuk membiasakan ngaji setiap hari. Dan juga kaum muslim yang sedang tidak tenang hatinya , ditegur 'Makanye Ngaji' agar tenang." />
  <meta property="og:image" content="/quran.png" />

  <!-- Twitter -->
  <meta property="twitter:card" content="summary_large_image" />
  <meta property="twitter:url" content="https://makanyengaji.vercel.app/" />
  <meta property="twitter:title" content="Tersimpan - Makanye Ngaji" />
  <meta
    property="twitter:description"
    content="adalah platform qur'an digital yang dibuat dengan tujuan menyadarkan kaum muslim khususnya di Indonesia untuk membiasakan ngaji setiap hari. Dan juga kaum muslim yang sedang tidak tenang hatinya , ditegur 'Makanye Ngaji' agar tenang." />
  <meta property="twitter:image" content="/quran.png" />
</svelte:head>

{#if tersimpan <= 0}
  <h1 class="border-b-2 text-2xl font-bold mb-5">
    Data Tersimpan Masih Kosong
  </h1>

  <p class="mt-5">
    Untuk menyimpan data surah, antum bisa pergi ke halaman surah dan klik
    simpan di pojok kanan. Otomatis data akan tersimpan disini,
    Barakallahufiikum.
  </p>
{:else}
  {#each tersimpan as surah}
    <List
      number={surah.number}
      href="surah/{surah.number}"
      name={surah.name.transliteration.id} />
  {/each}
{/if}
