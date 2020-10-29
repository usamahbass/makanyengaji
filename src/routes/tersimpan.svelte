<script>
  import { isSaved } from "../store.js";
  import List from "../components/list.svelte";

  let tersimpan = [];

  isSaved.subscribe((saved) => tersimpan = saved);
</script>

<svelte:head>
  <title>Tersimpan - Makanye Ngaji</title>
</svelte:head>

{#if tersimpan <= 0}
  <h1 class="border-b-2 text-2xl font-bold mb-5">
    Data Tersimpan Masih Kosong
  </h1>

  <p class="mt-5 hover:bg-black hover:text-white">
    Untuk menyimpan data surah, antum bisa pergi ke halaman surah dan klik
    simpan di pojok kanan. Otomatis data akan tersimpan disini,
    Barakallahufiikum.
  </p>
{:else}
  {#each tersimpan as surah}
    <List
      number={surah.number}
      href={surah.number}
      name={surah.name.transliteration.id} />
  {/each}
{/if}
