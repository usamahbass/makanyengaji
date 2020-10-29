<script context="module">
  export async function preload({ params }) {
    const res = await this.fetch(`hadist/${params.slug}.json`);
    const data = await res.json();
    if (res.status === 200) {
      return { hadist: data };
    } else {
      this.error(res.status, data.message);
    }
  }
</script>

<script>
  import ListAyat from "../../components/list-ayat.svelte";

  export let hadist;
</script>

<svelte:head>
  <title>{hadist.judul}</title>
</svelte:head>

<h1 class="text-3xl text-center hover:bg-black hover:text-white">
  {hadist.judul}
</h1>

<ListAyat ayat={hadist.arab} arti={hadist.indo} />
