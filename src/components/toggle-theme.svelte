<script>
  import { onMount } from "svelte";
  import { appTheme } from "../store";

  const toogleTheme = () => {
    if ($appTheme === "terang") {
      appTheme.set("gelap");
      window.localStorage.setItem("tema", "gelap");
    } else {
      appTheme.set("terang");
      window.localStorage.setItem("tema", "terang");
    }
  };

  onMount(() => {
    const userTheme = window.localStorage.getItem("tema") || "terang";

    if (userTheme !== $appTheme) {
      appTheme.set(userTheme);
    }
  });
</script>

<style>
  button {
    width: 50px;
    height: 50px;
    bottom: 15%;
    right: 5%;
  }

  div {
    width: 2rem;
    height: 2rem;
  }
</style>

<button
  class="fixed bg-white rounded-full shadow-xl focus:outline-none overflow-hidden hover:bg-black hover:text-white"
  on:click={toogleTheme}>
  <div class={$appTheme === 'terang' ? 'hidden' : "contents"}>TERANG</div>

  <div class={$appTheme === 'gelap' ? 'hidden' : "contents"}>GELAP</div>
</button>
