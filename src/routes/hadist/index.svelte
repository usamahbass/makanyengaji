<script context="module">
  export function preload() {
    return this.fetch(`hadist.json`)
      .then((r) => r.json())
      .then((allhadist) => {
        return { allhadist };
      });
  }
</script>

<script>
  import List from "../../components/list.svelte";

  export let allhadist;
</script>

<svelte:head>
  <title>Hadist - Makanye Ngaji</title>
  <meta name="title" content="Hadist - Makanye Ngaji" />
  <meta
    name="description"
    content="berikut kumpulan hadist yang bisa dirangkum di Makanye Ngaji" />

  <!-- Open Graph / Facebook -->
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://makanyengaji.vercel.app/hadist/" />
  <meta property="og:title" content="Hadist - Makanye Ngaji" />
  <meta
    property="og:description"
    content="berikut kumpulan hadist yang bisa dirangkum di Makanye Ngaji" />
  <meta property="og:image" content="/quran.png" />

  <!-- Twitter -->
  <meta property="twitter:card" content="summary_large_image" />
  <meta
    property="twitter:url"
    content="https://makanyengaji.vercel.app/hadist/" />
  <meta property="twitter:title" content="Surah - Makanye Ngaji" />
  <meta
    property="twitter:description"
    content="berikut kumpulan hadist yang bisa dirangkum di Makanye Ngaji" />
  <meta property="twitter:image" content="/quran.png" />
</svelte:head>

<div class="h-screen">
  <h1 class="border-b-2 text-2xl font-bold mb-5">Berikut Kumpulan Hadist</h1>

  {#each allhadist as item}
    <List number={item.id} name={item.nama_hadist} href={item.path} />
  {/each}
</div>
