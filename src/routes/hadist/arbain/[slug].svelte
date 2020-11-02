<script context="module">
  export async function preload({ params }) {
    const { slug } = params;

    const res = await this.fetch(`hadist/arbain/${slug}.json`);
    const data = await res.json();

    if (res.status === 200) {
      return { item: data };
    } else {
      this.error(res.status, data.message);
    }

    return {
      slugs: slug,
    };
  }
</script>

<script>
  import ListHadist from "../../../components/list-hadist.svelte";

  export let slugs;

  export let item;

</script>

<svelte:head>
  <title>Hadist Arba'in - {item.judul}</title>
  <meta name="title" content="Hadist Arba'in
    -
    {item.judul}" />
  <meta
    name="description"
    content="berikut kumpulan hadist dalam Hadist Arba'in" />

  <!-- Open Graph / Facebook -->
  <meta property="og:type" content="website" />
  <meta
    property="og:url"
    content="https://makanyengaji.vercel.app/hadist/arbain/{slugs}" />
  <meta property="og:title" content="Hadist Arba'in
    -
    {item.judul}" />
  <meta
    property="og:description"
    content="berikut kumpulan hadist dalam Hadist Arba'in" />
  <meta property="og:image" content="/quran.png" />

  <!-- Twitter -->
  <meta property="twitter:card" content="summary_large_image" />
  <meta
    property="twitter:url"
    content="https://makanyengaji.vercel.app/hadist/arbain/{slugs}" />
  <meta
    property="twitter:title"
    content="Hadist Arba'in
    -
    {item.judul}" />
  <meta
    property="twitter:description"
    content="berikut kumpulan hadist dalam Hadist Arba'in" />
  <meta property="twitter:image" content="/quran.png" />
</svelte:head>

<div>
  <div class="flex flex-row flex-wrap justify-center font-quran ">
    <h1 class="text-3xl mr-3 hover-makanye">{item.judul}</h1>
    <span class="text-3xl hover-makanye">-</span>
    <h1 class="text-3xl ml-3 hover-makanye">Hadist ke {item.ke}</h1>
  </div>

  <ListHadist
    hadist={item.hadist}
    arti={item.arti}
    riwayat={item.diriwayatkan === null ? '' : `Hadist Riwayat ${item.diriwayatkan}`} />
</div>
