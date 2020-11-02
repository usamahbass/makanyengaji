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

  svg {
    margin: 0 auto;
  }
</style>

<button
  class="fixed bg-white rounded-full shadow-xl focus:outline-none overflow-hidden hover:bg-black hover:text-white"
  on:click={toogleTheme}>
  <div class={$appTheme === 'terang' ? 'hidden' : 'contents'}>
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
      class="feather feather-sun"><circle cx="12" cy="12" r="5" />
      <line x1="12" y1="1" x2="12" y2="3" />
      <line x1="12" y1="21" x2="12" y2="23" />
      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
      <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
      <line x1="1" y1="12" x2="3" y2="12" />
      <line x1="21" y1="12" x2="23" y2="12" />
      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
      <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
      <title>Terang</title>
    </svg>
  </div>

  <div class={$appTheme === 'gelap' ? 'hidden' : 'contents'}>
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
      class="feather feather-moon"><path
      d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
      <title>Gelap</title>
    </svg>
  </div>
</button>
