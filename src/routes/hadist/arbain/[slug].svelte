<script context="module">
  export async function preload({ params }) {
    const res = await this.fetch(`hadist/arbain/${params.slug}.json`);
    const data = await res.json();

    if (res.status === 200) {
      return { item: data };
    } else {
      this.error(res.status, data.message);
    }
  }
</script>

<script>
  import ListHadist from "../../../components/list-hadist.svelte";

  export let item;
</script>

<svelte:head>
  <title>Hadist Arba`in - {item.judul}</title>
</svelte:head>

<div class="flex flex-row flex-wrap justify-center font-quran ">
  <h1 class="text-3xl mr-3 hover-makanye">{item.judul}</h1>
  <span class="text-3xl hover-makanye">-</span>
  <h1 class="text-3xl ml-3 hover-makanye">
    Hadist ke
    {item.ke}
  </h1>
</div>

<ListHadist
  hadist={item.hadist}
  arti={item.arti}
  riwayat={item.diriwayatkan === null ? '' : `Hadist Riwayat ${item.diriwayatkan}`} />
