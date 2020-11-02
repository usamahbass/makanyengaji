<script>
  import { appTheme } from "../store";
  export let save;
</script>

<style>
  button {
    width: 50px;
    height: 50px;
    bottom: 30%;
    right: 5%;
  }

  svg {
    margin: 0 auto;
  }
</style>

<button
  class={`fixed bg-white rounded-full shadow-xl ${$appTheme === 'gelap' ? 'text-black' : 'text-black'} focus:outline-none overflow-hidden hover:bg-black hover:text-white`}
  on:click={save}>
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
    class="feather feather-save"><path
      d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z" />
    <polyline points="17 21 17 13 7 13 7 21" />
    <polyline points="7 3 7 8 15 8" /></svg>
</button>
