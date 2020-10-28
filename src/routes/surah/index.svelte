<script context="module">
  import { base_url } from "../../api";
  import List from "../../components/list.svelte";

  let allSurah = [];

  export async function preload() {
    const res = await this.fetch(`${base_url}/surah`);

    const surah = await res.json();

    if (surah.code === 200) {
      allSurah = surah.data;
    } else {
      this.error(404, "Halaman Tidak Ditemukan");
    }
  }

  console.log(allSurah);
</script>

<svelte:head>
  <title>Surah - Makanye Ngaji</title>
</svelte:head>

{#each allSurah as surah}
  <List
    href={surah.number}
    number={surah.number}
    name={surah.name.transliteration.id} />
{/each}
