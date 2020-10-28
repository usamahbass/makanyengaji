<script>
  import List from "../components/list.svelte";
  import Search from "../components/search.svelte";
  import { isLoading, isSurah } from "../store.js";

  let surah;

  isSurah.subscribe((elem) => {
    surah = elem;
  });
</script>

<svelte:head>
  <title>Makanye Ngaji</title>
</svelte:head>

<div class="flex flex-wrap mt-5">
  <span
    class="m-auto text-3xl bg-black text-white font-bold hover:bg-white hover:text-black mb-5">
    Udeh ngaji belom hari ini?
  </span>
  
  <Search />

  {#if $isLoading}
    <p class="m-auto">sedang mencari , sabar yak ...</p>
  {:else if Object.values($isSurah).length === 0}
    <div />
  {:else}
    <List number={surah.number} href={surah.number} name={surah.name.transliteration.id} />
  {/if}
</div>
