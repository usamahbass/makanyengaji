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
</style>

<button
  class={`fixed bg-white rounded-full shadow-xl ${$appTheme === "gelap" ? "text-black" : "text-black"} focus:outline-none overflow-hidden hover:bg-black hover:text-white`}
  on:click={save}>
  SIMPAN
</button>
