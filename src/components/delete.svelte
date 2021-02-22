<script>
  import { appTheme, isSaved } from "../store";
  export let handleDelete;
</script>

<button
  disabled={$isSaved.length <= 0}
  class={`fixed bg-white rounded-full shadow-xl ${
    $appTheme === "gelap" ? "text-black" : "text-black"
  } focus:outline-none overflow-hidden hover:bg-black hover:text-white`}
  on:click={handleDelete}
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    class="feather feather-trash-2"
    ><polyline points="3 6 5 6 21 6" /><path
      d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"
    /><line x1="10" y1="11" x2="10" y2="17" /><line
      x1="14"
      y1="11"
      x2="14"
      y2="17"
    />
   <title>Hapus Semua</title>
</svg
  >
</button>

<style>
  button {
    width: 50px;
    height: 50px;
    bottom: 35%;
    right: 5%;
  }

  svg {
    margin: 0 auto;
  }
</style>
