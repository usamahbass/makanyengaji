<script>
  import { isLoading, isSurah, isHadist, isSearch } from "../store.js";
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

<svelte:head>
  <link rel="shortcut icon" type="image/png" href="quran.png" />

  <!-- Primary Meta Tags -->
  <title>Makanye Ngaji</title>
  <meta name="title" content="Makanye Ngaji" />
  <meta
    name="description"
    content="adalah platform qur'an digital yang dibuat dengan tujuan menyadarkan kaum muslim khususnya di Indonesia untuk membiasakan ngaji setiap hari. Dan juga kaum muslim yang sedang tidak tenang hatinya , ditegur 'Makanye Ngaji' agar tenang." />

  <!-- Open Graph / Facebook -->
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://makanyengaji.vercel.app/" />
  <meta property="og:title" content="Makanye Ngaji" />
  <meta
    property="og:description"
    content="adalah platform qur'an digital yang dibuat dengan tujuan menyadarkan kaum muslim khususnya di Indonesia untuk membiasakan ngaji setiap hari. Dan juga kaum muslim yang sedang tidak tenang hatinya , ditegur 'Makanye Ngaji' agar tenang." />
  <meta property="og:image" content="/quran.png" />

  <!-- Twitter -->
  <meta property="twitter:card" content="summary_large_image" />
  <meta property="twitter:url" content="https://makanyengaji.vercel.app/" />
  <meta property="twitter:title" content="Makanye Ngaji" />
  <meta
    property="twitter:description"
    content="adalah platform qur'an digital yang dibuat dengan tujuan menyadarkan kaum muslim khususnya di Indonesia untuk membiasakan ngaji setiap hari. Dan juga kaum muslim yang sedang tidak tenang hatinya , ditegur 'Makanye Ngaji' agar tenang." />
  <meta property="twitter:image" content="/quran.png" />
</svelte:head>

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
