<script>
  import { base_url } from "../api.js";
  import { isLoading } from "../store.js";

  let values = "";

  const handleSearch = (e) => {
    e.preventDefault();

    isLoading.set(true);

    fetch(`${base_url}/surah/${values}`)
      .then((res) => {
        return res.json();
      })
      .then((surah) => {
        isLoading.set(false);
        console.log(surah);
      });
  };
</script>

<form class="w-full" on:submit={handleSearch}>
  <input
    class="appearance-none block w-full bg-black-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight hover:appearance-none focus:appearance-none focus:outline-none focus:bg-white focus:border-black-500"
    id="search-input"
    type="number"
    autocomplete="off"
    value={values}
    on:change={(e) => (values = e.target.value)}
    placeholder="Cari surah ke  ..." />
</form>
