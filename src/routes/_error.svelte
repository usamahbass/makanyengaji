<script>
  export let status;
  export let error;

  const dev = process.env.NODE_ENV === "development";
</script>

<style>
  h1,
  p {
    margin: 0 auto;
  }

  h1 {
    font-size: 2.8em;
    font-weight: 700;
    margin: 0 0 0.5em 0;
  }

  p {
    margin: 1em auto;
  }

  @media (min-width: 480px) {
    h1 {
      font-size: 4em;
    }
  }
</style>

<svelte:head>
  <!-- Primary Meta Tags -->
  <title>{status} - Makanye Ngaji</title>
  <meta name="title" content="{status} - Makanye Ngaji" />
  <meta
    name="description"
    content="adalah platform qur'an digital yang dibuat dengan tujuan menyadarkan kaum muslim khususnya di Indonesia untuk membiasakan ngaji setiap hari. Dan juga kaum muslim yang sedang tidak tenang hatinya , ditegur 'Makanye Ngaji' agar tenang." />

  <!-- Open Graph / Facebook -->
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://makanyengaji.vercel.app/" />
  <meta property="og:title" content="{status} - Makanye Ngaji" />
  <meta
    property="og:description"
    content="adalah platform qur'an digital yang dibuat dengan tujuan menyadarkan kaum muslim khususnya di Indonesia untuk membiasakan ngaji setiap hari. Dan juga kaum muslim yang sedang tidak tenang hatinya , ditegur 'Makanye Ngaji' agar tenang." />
  <meta property="og:image" content="/quran.png" />

  <!-- Twitter -->
  <meta property="twitter:card" content="summary_large_image" />
  <meta property="twitter:url" content="https://makanyengaji.vercel.app/" />
  <meta property="twitter:title" content="{status} - Makanye Ngaji" />
  <meta
    property="twitter:description"
    content="adalah platform qur'an digital yang dibuat dengan tujuan menyadarkan kaum muslim khususnya di Indonesia untuk membiasakan ngaji setiap hari. Dan juga kaum muslim yang sedang tidak tenang hatinya , ditegur 'Makanye Ngaji' agar tenang." />
  <meta property="twitter:image" content="/quran.png" />
</svelte:head>

<h1>{status}</h1>

<p>{error.message}</p>

{#if dev && error.stack}
  <pre>{error.stack}</pre>
{/if}
