<script>
  import { appTheme } from "../store";
  import Header from "../components/header.svelte";
  import Footer from "../components/footer.svelte";
  import ToggleTheme from "../components/toggle-theme.svelte";

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
  <slot />
</main>

<ToggleTheme />

<!-- <Footer /> -->
