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
  import Seo from "../../components/seo.svelte";

  export let allhadist;
</script>

<Seo
  title="Hadist - Makanye Ngaji"
  description="berikut kumpulan hadist yang telah dirangkum oleh Makanye Ngaji"
  url="https://makanyengaji.vercel.app/hadist/"
  type="blog" />

<div class="h-screen">
  <h1 class="border-b-2 text-2xl font-bold mb-5">Berikut Kumpulan Hadist</h1>

  {#each allhadist as item}
    <List number={item.id} name={item.nama_hadist} href={item.path} />
  {/each}
</div>
