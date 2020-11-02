<script context="module">
  import { base_url } from "../../api";
  import List from "../../components/list.svelte";

  let allSurah = [];
  let loading = true;

  export async function preload() {
    const res = await this.fetch(`${base_url}/surah`);

    const surah = await res.json();

    if (surah.code === 200) {
      loading = false;
      allSurah = surah.data;
    } else {
      loading = false;
      this.error(404, "Halaman Tidak Ditemukan");
    }
  }
</script>

<svelte:head>
  <title>Tafsir Surah - Makanye Ngaji</title>
  <meta name="title" content="Tafsir Surah - Makanye Ngaji" />
  <meta
    name="description"
    content="berikut kumpulan tafsir surah dari masing-masing surah di Alquran" />

  <!-- Open Graph / Facebook -->
  <meta property="og:type" content="website" />
  <meta
    property="og:url"
    content="https://makanyengaji.vercel.app/tafsir-surah/" />
  <meta property="og:title" content="Tafsir Surah - Makanye Ngaji" />
  <meta
    property="og:description"
    content="berikut kumpulan tafsir surah dari masing-masing surah di Alquran" />
  <meta property="og:image" content="/quran.png" />

  <!-- Twitter -->
  <meta property="twitter:card" content="summary_large_image" />
  <meta
    property="twitter:url"
    content="https://makanyengaji.vercel.app/tafsir-surah/" />
  <meta property="twitter:title" content="Tafsir Surah - Makanye Ngaji" />
  <meta
    property="twitter:description"
    content="berikut kumpulan tafsir surah dari masing-masing surah di Alquran" />
  <meta property="twitter:image" content="/quran.png" />
</svelte:head>

{#if loading}
  <p class="m-auto">sedang memuat data , sabar yak ...</p>
{:else}
  {#each allSurah as surah}
    <List
      href={`tafsir-surah/${surah.number}`}
      number={surah.number}
      name={surah.name.transliteration.id} />
  {/each}
{/if}
