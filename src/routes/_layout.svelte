<script>
  import Footer from "../components/footer.svelte";
  import Header from "../components/header.svelte";

  export let segment;
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

<main>
  <slot />
</main>

<!-- <Footer /> -->
