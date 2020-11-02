<script context="module">
  import { base_url } from "../../api";

  let thisSurah;

  export async function preload({ params }) {
    const { slug } = params;

    const response = await this.fetch(`${base_url}/surah/${slug}`);

    if (response.status === 200) {
      const surah = await response.json();

      thisSurah = surah.data;
    } else {
      this.error(404, "Halaman Tidak Ditemukan !");
    }

    return {
      slugs: slug,
    };
  }
</script>

<script>
  import { isSaved } from "../../store";
  import Audio from "../../components/audio.svelte";
  import ListAyat from "../../components/list-ayat.svelte";
  import Save from "../../components/save.svelte";

  const savetoStore = () => {
    $isSaved = [...$isSaved, thisSurah];
    alert(`surah ${thisSurah.name.transliteration.id} berhasil disimpan`);
  };

  export let slugs;
</script>

<style>
  #wrapper {
    counter-reset: number-quran;
  }
</style>

<svelte:head>
  <title>
    {thisSurah.name.transliteration.id}
    -
    {thisSurah.name.translation.id}
  </title>
  <meta
    name="title"
    content="{thisSurah.name.transliteration.id}
    -
    {thisSurah.name.translation.id}" />
  <meta
    name="description"
    content="berikut kumpulan ayat dari surah {thisSurah.name.transliteration.id}" />

  <!-- Open Graph / Facebook -->
  <meta property="og:type" content="website" />
  <meta
    property="og:url"
    content="https://makanyengaji.vercel.app/surah/{slugs}" />
  <meta
    property="og:title"
    content="{thisSurah.name.transliteration.id}
    -
    {thisSurah.name.translation.id}" />
  <meta
    property="og:description"
    content="berikut kumpulan ayat dari surah {thisSurah.name.transliteration.id}" />
  <meta property="og:image" content="/quran.png" />

  <!-- Twitter -->
  <meta property="twitter:card" content="summary_large_image" />
  <meta
    property="twitter:url"
    content="https://makanyengaji.vercel.app/surah/{slugs}" />
  <meta
    property="twitter:title"
    content="{thisSurah.name.transliteration.id}
    -
    {thisSurah.name.translation.id}" />
  <meta
    property="twitter:description"
    content="berikut kumpulan ayat dari surah {thisSurah.name.transliteration.id}" />
  <meta property="twitter:image" content="/quran.png" />
</svelte:head>

<div class="flex flex-row flex-wrap justify-center font-quran ">
  <h1 class="text-3xl mr-3 hover:bg-black hover:text-white">
    {thisSurah.name.transliteration.id}
  </h1>
  <span class="text-3xl hover:bg-black hover:text-white">-</span>
  <h1 class="text-3xl ml-3 hover:bg-black hover:text-white">
    {thisSurah.name.short}
  </h1>
</div>

<ol id="wrapper">
  {#each thisSurah.verses as ayat}
    <ListAyat
      ayat={ayat.text.arab}
      latin={ayat.text.transliteration.en}
      arti={ayat.translation.id}>
      <Audio src={ayat.audio.secondary[0]} />
    </ListAyat>
  {/each}
</ol>

<Save save={savetoStore} />
