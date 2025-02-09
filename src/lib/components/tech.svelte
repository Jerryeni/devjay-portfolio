<script>
  import Progress from "./progress.svelte";
</script>

<section class="flex p-6 lg:px-10 flex-col gap-8 relative" id="tech">
  <div class="py-4">
    <h2 class="text-[39px] font-bold text-secondary text-center">
      Technologies I use
    </h2>
  </div>
  <div
    class="relative grid grid-cols-1 md:grid-cols-2 w-full gap-10 items-center justify-center lg:p-10 mx-auto"
  >
    <div class="flex flex-col gap-4">
      <Progress name="React"  />
      <Progress name="Typescript"  />
      <Progress name="HTML"  />
      <Progress name="CSS"  />
      <Progress name="Bootstrap"  />
      <Progress name="Tailwind"  />
    </div>
    <div class="flex flex-col gap-4">
      <Progress name="Nextjs"  />
      <Progress name="PHP"  />
      <Progress name="Javascript"  />
      <Progress name="Svelte"  />
      <Progress name="Alpinejs"  />
      <Progress name="Nodejs"  />
    </div>
    
  </div>
</section>
``
