<script>
  import { derived } from "svelte/store";
  import { stores } from "@sapper/app";
  import { appTheme } from "../store";
  import Header from "../components/header.svelte";
  import Footer from "../components/footer.svelte";
  import ToggleTheme from "../components/toggle-theme.svelte";

  const { preloading } = stores();

  const delayedPreloading = derived(preloading, (currentPreloading, set) => {
    setTimeout(() => set(currentPreloading), 250);
  });

  export let segment;

  let temaNow;

  appTheme.subscribe((tema) => (temaNow = tema));
</script>

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

<div class="h-screen {temaNow === 'gelap' ? 'bg-makanye-black text-white' : null}">
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
