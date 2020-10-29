<script context="module">
  export function preload() {
    return this.fetch(`hadist.json`)
      .then((r) => r.json())
      .then((items) => {
        return { items };
      });
  }
</script>

<script>
  import List from "../../components/list.svelte";

  export let items;
</script>

<svelte:head>
  <title>Hadist - Makanye Ngaji</title>
</svelte:head>

{#each items as item}
  <List name={item.judul} href="hadist/{item.slug}" />
{/each}
