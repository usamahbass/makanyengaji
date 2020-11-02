<script context="module">
  import { base_url } from "../../api";

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

<script>
  import List from "../../components/list.svelte";
</script>

<svelte:head>
  <title>Surah - Makanye Ngaji</title>
  <meta name="title" content="Surah - Makanye Ngaji" />
  <meta
    name="description"
    content="berikut kumpulan surah yang ada dalam Al-Qur'an" />

  <!-- Open Graph / Facebook -->
  <meta property="og:type" content="website" />
  <meta
    property="og:url"
    content="https://makanyengaji.vercel.app/surah/" />
  <meta property="og:title" content="Surah - Makanye Ngaji" />
  <meta
    property="og:description"
    content="berikut kumpulan surah yang ada dalam Al-Qur'an" />
  <meta property="og:image" content="/quran.png" />

  <!-- Twitter -->
  <meta property="twitter:card" content="summary_large_image" />
  <meta
    property="twitter:url"
    content="https://makanyengaji.vercel.app/surah/" />
  <meta property="twitter:title" content="Surah - Makanye Ngaji" />
  <meta
    property="twitter:description"
    content="berikut kumpulan surah yang ada dalam Al-Qur'an" />
  <meta property="twitter:image" content="/quran.png" />
</svelte:head>

{#if loading}
  <p class="m-auto">sedang memuat data , sabar yak ...</p>
{:else}
  {#each allSurah as surah}
    <List
      href={`surah/${surah.number}`}
      number={surah.number}
      name={surah.name.transliteration.id} />
  {/each}
{/if}
