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
  }
</script>

<svelte:head>
    <title>{thisSurah.name.transliteration.id} - {thisSurah.name.translation.id}</title>
</svelte:head>

<div>{thisSurah.name.transliteration.id}</div>
