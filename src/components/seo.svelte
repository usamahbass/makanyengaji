<script>
  export let title;
  export let description;
  export let url;
  export let type;
</script>

<svelte:head>
  <link rel="shortcut icon" type="image/png" href="favicon.png" />

  <!-- Primary Meta Tags -->
  <title>{title}</title>
  <meta name="referrer" content="no-referrer-when-downgrade" />
  <meta name="title" content={title} />
  <meta name="description" content={description} />
  <meta name="image" content="/favicon.png" />
  <meta name="url" content={url} />
  <meta name="identifier-URL" content={url} />
  <meta name="copyright" content="Raksye" />
  <meta name="keywords" content="quran, mengaji, quran, muslim" />
  <!-- Open Graph / Facebook -->
  <meta property="og:type" content={type} />
  <meta property="og:url" content={url} />
  <meta property="og:title" content={title} />
  <meta property="og:description" content={description} />
  <meta property="og:image" content="https://makanyengaji.vercel.app/logo-512.png" />
  <meta property="og:image:url" content="https://makanyengaji.vercel.app/logo-512.png" />
  <meta property="og:image:secure_url" content="https://makanyengaji.vercel.app/logo-512.png" />
  <meta property="og:image:type" content="image/png" />

  <!-- Twitter -->
  <meta property="twitter:card" content="summary_large_image" />
  <meta property="twitter:url" content={url} />
  <meta property="twitter:title" content={title} />
  <meta property="twitter:description" content={description} />
  <meta property="twitter:image" content="https://makanyengaji.vercel.app/logo-512.png" />
  <meta property="twitter:creator" content="@usamahbass" />
  <meta property="twitter:site" content="@usamahbass" />
</svelte:head>
