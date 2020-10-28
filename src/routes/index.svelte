<script>
  import Search from "../components/search.svelte";
  import { isLoading } from "../store.js";

  isLoading.subscribe((elem) => {
    console.log(elem);
  });
</script>

<svelte:head>
  <title>Makanye Ngaji</title>
</svelte:head>

<div class="flex flex-wrap">
  <Search />

  {#if $isLoading}
    <div>loading...</div>
  {:else}
    <div>tara..</div>
  {/if}
</div>
