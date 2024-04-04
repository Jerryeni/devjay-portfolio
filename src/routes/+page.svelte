<script>
  import About from "$lib/components/about.svelte";
  import Contact from "$lib/components/contact.svelte";
  import Hero from "$lib/components/hero.svelte";
  import Projects from "$lib/components/projects.svelte";
  import Services from "$lib/components/services.svelte";
  import Skills from "$lib/components/skills.svelte";
  import Socials from "$lib/components/socials.svelte";
  import Tech from "$lib/components/tech.svelte";
  import Testimonies from "$lib/components/testimonies.svelte";
  import Footer from "$lib/components/footer.svelte";

  // Aos
</script>

<div class="w-full h-full overflow-hidden">
  <Hero />
  <Socials />
  <About />
  <Services />
  <Skills />
  <Tech />
  <Projects />
  <Contact />
  <Testimonies />
  <Footer />
</div>
