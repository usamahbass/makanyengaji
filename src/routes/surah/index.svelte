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
  <title>Surah - Makanye Ngaji</title>
</svelte:head>

{#if loading}
  <p class="m-auto">sedang memuat data , sabar yak ...</p>
{:else}
  {#each allSurah as surah}
    <List
      href={surah.number}
      number={surah.number}
      name={surah.name.transliteration.id} />
  {/each}
{/if}
