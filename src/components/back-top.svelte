<script>
  export let showOnPx = 150;
  let hidden = true;

  function goTop() {
    document.body.scrollIntoView();
  }

  function scrollContainer() {
    return document.documentElement || document.body;
  }

  function handleOnScroll() {
    if (!scrollContainer()) {
      return;
    }

    if (scrollContainer().scrollTop > showOnPx) {
      hidden = false;
    } else {
      hidden = true;
    }
  }
</script>

<style>
  .back-to-top {
    opacity: 1;
    transition: opacity 0.5s, visibility 0.5s;
    position: fixed;
    z-index: 99;
    width: 50px;
    height: 50px;
    bottom: 5%;
    right: 5%;
    user-select: none;
    border-radius: 100%;
  }

  .back-to-top.hidden {
    opacity: 0;
    visibility: hidden;
  }
  
  svg {
    margin: 0 auto;
  }
</style>

<svelte:window on:scroll={handleOnScroll} />

<button
  class="back-to-top bg-white text-black rounded-full shadow-xl focus:outline-none overflow-hidden hover:bg-black hover:text-white"
  on:click={goTop}
  class:hidden>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="40"
    height="40"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="1.5"
    stroke-linecap="round"
    stroke-linejoin="round"
    class="feather feather-arrow-up"><line x1="12" y1="19" x2="12" y2="5" />
    <polyline points="5 12 12 5 19 12" /></svg>
</button>
