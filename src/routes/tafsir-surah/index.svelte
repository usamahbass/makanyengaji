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
  import Seo from "../../components/seo.svelte";
  import List from "../../components/list.svelte";
</script>

<Seo
  title="Tafsir Surah - Makanye Ngaji"
  description="berikut kumpulan tafsir surah dari masing-masing surah di Alquran"
  url="https://makanyengaji.vercel.app/tafsir-surah/"
  type="blog" />

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
