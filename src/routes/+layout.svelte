<script>
  import Header from "$lib/components/Header.svelte";
  import { onMount } from "svelte";
  import "../app.pcss";
  import Aos from "aos";

  onMount(async () => {
    Aos.init();
  });
</script>

<svelte:head>
  <title>Jeremiah Eni – Full Stack Developer | Portfolio</title>
  <meta name="description" content="Explore the portfolio of Jeremiah Eni, a skilled Fullstack developer specializing in Svelte, React, JavaScript, and modern UI design." />
  <meta name="keywords" content="Fullstack Developer, Svelte, JavaScript Developer, Web Developer, Portfolio, Jeremiah Eni, React, Tailwind, nodejs, Next.js, SvelteKit, frontend developer" />
  <meta name="author" content="Jeremiah Eni" />
  <link rel="canonical" href="https://devjay-portfolio.pages.dev/" />

  <!-- Open Graph Meta Tags -->
  <meta property="og:title" content="Jeremiah Eni – Fullstack Developer Portfolio" />
  <meta property="og:description" content="Modern and responsive portfolio site for Jeremiah Eni, showcasing skills in Svelte, React, and web technologies." />
  <meta property="og:image" content="https://devjay-portfolio.pages.dev/images/preview.png" />
  <meta property="og:url" content="https://devjay-portfolio.pages.dev/" />
  <meta property="og:type" content="website" />

  <!-- Twitter Card -->
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Jeremiah Eni – Fullstack Developer" />
  <meta name="twitter:description" content="Explore the modern Fullstack portfolio of Jeremiah Eni, built with Svelte and TailwindCSS." />
  <meta name="twitter:image" content="https://devjay-portfolio.pages.dev/images/preview.png" />

  <!-- Favicon (Optional) -->
  <link rel="icon" href="/favicon.ico" />

  <!-- Structured Data -->
  <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "Person",
      "name": "Jeremiah Eni",
      "url": "https://devjay-portfolio.pages.dev",
      "sameAs": [
        "https://github.com/jerryeni",
        "https://linkedin.com/in/jerryeni"
      ],
      "jobTitle": "Fullstack Developer",
      "worksFor": {
        "@type": "Organization",
        "name": "Techstament"
      }
    }
  </script>
</svelte:head>

<div class="flex flex-col">
  <Header />
  <slot />
</div>
