<script>
  export let segment;

  let isExpanded = false;

  const routes = [
    {
      title: "Beranda",
      path: ".",
      rel: null,
    },
    {
      title: "Surah",
      path: "surah",
      rel: "prefetch",
    },
    {
      title: "Tentang",
      path: "tentang",
      rel: null,
    },
  ];
</script>

<style>
  [aria-current] {
    background-color: black;
    color: white;
  }
</style>

<header>
  <div
    class="flex flex-wrap items-center justify-between max-w-4xl p-4 mx-auto md:flex-no-wrap">
    <div class="flex items-center">
      <!-- icon -->
      <a
        class="text-2xl font-bold text-nav"
        aria-current={segment === undefined ? 'page' : undefined}
        href=".">
        Makanye Ngaji
      </a>
    </div>

    <button
      class="flex items-center block px-3 py-2 text-nav border border-white rounded md:hidden"
      on:click={() => (isExpanded = !isExpanded)}>
      <svg
        class="w-3 h-3 fill-current"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg">
        <title>Menu</title>
        <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
      </svg>
    </button>

    <ul
      class={`${isExpanded ? `block` : `hidden`} md:flex flex-col md:flex-row md:items-center md:justify-center text-sm w-full md:w-auto`}>
      {#each routes as route, index}
        <li class="mt-3 md:mt-0 md:ml-6">
          <a
            class="block text-base text-nav hover:bg-black hover:text-white"
            rel={route.rel}
            aria-current={index === 0 ? (segment === undefined ? 'page' : undefined) : segment === route.path ? 'page' : undefined}
            href={route.path}>{route.title}</a>
        </li>
      {/each}
    </ul>
  </div>
</header>
