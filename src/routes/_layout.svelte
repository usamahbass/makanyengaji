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
  main {
    position: relative;
    max-width: 56em;
    padding: 2em;
    margin: 0 auto;
    box-sizing: border-box;
  }
</style>

<Header {segment} />

<main class={temaNow === 'gelap' ? 'bg-black text-white' : null}>
  {#if $preloading && $delayedPreloading}
    <div>loading...</div>
  {/if}
  <slot />
</main>

<Footer />

<ToggleTheme />
