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
  import ListTafsir from "../../components/list-tafsir.svelte";
  import Seo from "../../components/seo.svelte";

  export let slugs;
</script>

<style>
  #wrapper {
    counter-reset: number-quran;
  }
</style>

<Seo
  title="{thisSurah.name.transliteration.id}
-
{thisSurah.name.translation.id}"
  description="berikut kumpulan tafsir surah dari surah {thisSurah.name.transliteration.id}"
  url="https://makanyengaji.vercel.app/tafsir-surah/{slugs}"
  type="blog" />

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
    <ListTafsir tafsir={ayat.tafsir.id.long} />
  {/each}
</ol>
