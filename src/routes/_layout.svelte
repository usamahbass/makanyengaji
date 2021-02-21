<script>
  import { onMount } from "svelte";
  import { derived } from "svelte/store";
  import { stores } from "@sapper/app";
  import { appTheme, isSaved } from "../store";
  import Header from "../components/header.svelte";
  import Footer from "../components/footer.svelte";
  import ToggleTheme from "../components/toggle-theme.svelte";
  import BackTop from "../components/back-top.svelte";

  const { preloading } = stores();

  const delayedPreloading = derived(preloading, (currentPreloading, set) => {
    setTimeout(() => set(currentPreloading), 250);
  });

  export let segment;

  let temaNow;

  appTheme.subscribe((tema) => (temaNow = tema));

  onMount(() => {
    let dbSaved = JSON.parse(localStorage.getItem("isSaved"));

    if (dbSaved) {
      $isSaved = dbSaved;
    }
  });
</script>

<div
  class="h-full {temaNow === 'gelap' ? 'bg-makanye-black text-white' : null}"
>
  <Header {segment} />

  <main>
    {#if $preloading && $delayedPreloading}
      <div>loading...</div>
    {/if}
    <slot />
  </main>

  <Footer />
</div>

<ToggleTheme />

<BackTop />

<style>
  .bg-makanye-black {
    background-color: #1a202c;
  }
  main {
    position: relative;
    max-width: 56em;
    padding: 2em;
    margin: 0 auto;
    box-sizing: border-box;
  }
</style>
