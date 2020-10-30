<script>
  import { isHadist, isSearch } from "../store.js";

  async function handleResult() {
    const res = await fetch("http://localhost:3000/hadist.json");

    const result = await res.json();

    isHadist.set(result);
  }
</script>

<form
  class="w-full"
  on:submit={(e) => e.preventDefault()}
  on:click={handleResult}>
  <input
    class="appearance-none block w-full bg-black-200 text-gray-700 border border-gray-500 rounded py-3 px-4 mb-3 leading-tight hover:appearance-none focus:appearance-none focus:outline-none focus:bg-white focus:border-gray-700"
    autocomplete="off"
    type="search"
    bind:value={$isSearch}
    placeholder="Cari hadist ..." />
</form>
