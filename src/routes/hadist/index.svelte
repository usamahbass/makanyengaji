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
</svelte:head>

<h1 class="border-b-2 text-2xl font-bold mb-5">Berikut Kumpulan Hadist</h1>

{#each allhadist as item}
  <List number={item.id} name={item.nama_hadist} href={item.path} />
{/each}
