<script context="module">
  export function preload() {
    return this.fetch(`hadist/arbain.json`)
      .then((r) => r.json())
      .then((hadist) => {
        return { hadist };
      });
  }
</script>

<script>
  import List from "../../../components/list.svelte";

  export let hadist;
</script>

<svelte:head>
  <title>Hadist Arba`in - Imam Nawawi Rahimahullah</title>
  <meta name="title" content="Hadist Arba`in - Imam Nawawi Rahimahullah" />
  <meta
    name="description"
    content="berikut kumpulan hadist yang ada dalam Hadist Arba`in" />

  <!-- Open Graph / Facebook -->
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://makanyengaji.vercel.app/hadist/arbain" />
  <meta
    property="og:title"
    content="Hadist Arba`in - Imam Nawawi Rahimahullah" />
  <meta
    property="og:description"
    content="berikut kumpulan hadist yang ada dalam Hadist Arba`in" />
  <meta property="og:image" content="/quran.png" />

  <!-- Twitter -->
  <meta property="twitter:card" content="summary_large_image" />
  <meta
    property="twitter:url"
    content="https://makanyengaji.vercel.app/hadist/arbain" />
  <meta
    property="twitter:title"
    content="Hadist Arba`in - Imam Nawawi Rahimahullah" />
  <meta
    property="twitter:description"
    content="berikut kumpulan hadist yang ada dalam Hadist Arba`in" />
  <meta property="twitter:image" content="/quran.png" />
</svelte:head>

<h1 class="border-b-2 text-2xl font-bold mb-5">
  Hadist Arba`in - Imam Nawawi Rahimahullah
</h1>

<ul>
  {#each hadist as item}
    <List number={item.ke} name={item.judul} href="hadist/arbain/{item.slug}" />
  {/each}
</ul>
