<script>
  import { isSaved } from "../store.js";
  import Seo from "../components/seo.svelte";
  import List from "../components/list.svelte";

  let tersimpan = [];

  isSaved.subscribe((saved) => (tersimpan = saved));
</script>

<Seo
  title="Tersimpan - Makanye Ngaji"
  description="adalah platform qur'an digital yang dibuat dengan tujuan menyadarkan kaum muslim khususnya di Indonesia untuk membiasakan ngaji setiap hari. Dan juga kaum muslim yang sedang tidak tenang hatinya , ditegur 'Makanye Ngaji' agar tenang."
  url="https://makanyengaji.vercel.app/tersimpan"
  type="website" />

<div class="h-screen">
  {#if tersimpan <= 0}
    <h1 class="border-b-2 text-2xl font-bold mb-5">
      Data Tersimpan Masih Kosong
    </h1>

    <p class="mt-5">
      Untuk menyimpan data surah, antum bisa pergi ke halaman surah dan klik
      simpan di pojok kanan. Otomatis data akan tersimpan disini,
      Barakallahufiikum.
    </p>
  {:else}
    {#each tersimpan as surah}
      <List
        number={surah.number}
        href="surah/{surah.number}"
        name={surah.name.transliteration.id} />
    {/each}
  {/if}
</div>
