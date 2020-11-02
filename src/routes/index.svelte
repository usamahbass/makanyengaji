<script>
  import { isLoading, isSurah, isHadist, isSearch } from "../store.js";
  import Seo from "../components/seo.svelte";
  import List from "../components/list.svelte";
  import SearchHadist from "../components/search-hadist.svelte";
  import Search from "../components/search.svelte";

  let surah;
  let searchValue = "";
  let hadist = [];

  isSearch.subscribe((elem) => (searchValue = elem));

  isSurah.subscribe((elem) => (surah = elem));

  isHadist.subscribe((elem) => {
    if (elem.length > 0) {
      hadist = elem.filter((item) => {
        return (
          item.nama_hadist.toLowerCase().indexOf(searchValue.toLowerCase()) !==
          -1
        );
      });
    }
  });
</script>

<Seo
  title="Makanye Ngaji"
  description="adalah platform qur'an digital yang dibuat dengan tujuan menyadarkan kaum muslim khususnya di Indonesia untuk membiasakan ngaji setiap hari. Dan juga kaum muslim yang sedang tidak tenang hatinya , ditegur 'Makanye Ngaji' agar tenang."
  url="https://makanyengaji.vercel.app"
  type="website" />

<div class="h-screen">
  <div class="flex flex-wrap mt-5">
    <span
      class="m-auto text-3xl bg-black text-white font-bold hover-makanye-black mb-5">
      Udeh ngaji belom hari ini?
    </span>

    <Search />

    {#if $isLoading}
      <p class="m-auto">sedang mencari , sabar yak ...</p>
    {:else if Object.values($isSurah).length === 0}
      <div />
    {:else}
      <List
        number={surah.number}
        href="surah/{surah.number}"
        name={surah.name.transliteration.id} />
    {/if}
  </div>

  <div class="flex flex-wrap mt-10">
    <span
      class="m-auto text-3xl bg-black text-white font-bold hover-makanye-black mb-5">
      Udeh baca hadist belom hari ini?
    </span>

    <SearchHadist />

    {#if hadist.length <= 0}
      <div />
    {:else}
      <div class="w-full relative b-0 border-l-2 border-r-2">
        {#each hadist as item}
          <List number={item.id} href={item.path} name={item.nama_hadist} />
        {/each}
      </div>
    {/if}
  </div>
</div>
