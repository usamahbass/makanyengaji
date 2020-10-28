<script context="module">
  import { base_url } from "../../api";
  import ListAyat from "../../components/list-ayat.svelte";

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
  }
</script>

<svelte:head>
  <title>
    {thisSurah.name.transliteration.id}
    -
    {thisSurah.name.translation.id}
  </title>
</svelte:head>

<div
  class="flex flex-row flex-wrap justify-center font-quran border-b-2 border-gray-200 ">
  <h1 class="text-3xl mr-3 hover:bg-black hover:text-white">
    {thisSurah.name.transliteration.id}
  </h1>
  <span class="text-3xl hover:bg-black hover:text-white">-</span>
  <h1 class="text-3xl ml-3 hover:bg-black hover:text-white">
    {thisSurah.name.short}
  </h1>
</div>

{#each thisSurah.verses as ayat}
  <ListAyat number={ayat.number.inSurah} ayat={ayat.text.arab} />
{/each}
