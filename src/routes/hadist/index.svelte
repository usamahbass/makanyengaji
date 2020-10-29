<script>
  import List from "../../components/list.svelte";

  let hadist = [
    {
      id: "1",
      nama: "Hadist arba`in",
      path: "hadist/arbain",
    },
  ];
</script>

<svelte:head>
  <title>Hadist - Makanye Ngaji</title>
</svelte:head>

<h1 class="border-b-2 text-2xl font-bold mb-5">Berikut Kumpulan Hadist</h1>

{#each hadist as item}
  <List number={item.id} name={item.nama} href={item.path} />
{/each}
