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
  import Seo from "../../../components/seo.svelte";

  export let hadist;
</script>

<Seo
  title="Hadist Arba`in - Imam Nawawi Rahimahullah"
  description="berikut kumpulan hadist yang ada dalam Hadist Arba`in"
  url="https://makanyengaji.vercel.app/hadist/arbain"
  type="blog" />

<h1 class="border-b-2 text-2xl font-bold mb-5">
  Hadist Arba`in - Imam Nawawi Rahimahullah
</h1>

<ul>
  {#each hadist as item}
    <List number={item.ke} name={item.judul} href="hadist/arbain/{item.slug}" />
  {/each}
</ul>
