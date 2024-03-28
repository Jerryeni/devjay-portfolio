<script>
  import Progress from "./progress.svelte";
</script>

<section class="flex p-6 lg:px-10 flex-col gap-8 relative">
  <div class="py-4">
    <h2 class="text-[39px] font-bold text-secondary text-center">
      Technologies I use
    </h2>
  </div>
  <div
    class="relative grid grid-cols-1 md:grid-cols-2 w-full gap-10 items-center justify-center lg:p-10 mx-auto"
  >
    <div class="flex flex-col gap-4">
      <Progress name="Golang" percent="80%" style="width: 80%" />
      <Progress name="Python" percent="60%" style="width: 60%" />
      <Progress name="Nextjs" percent="80%" style="width: 80%" />
      <Progress name="PHP" percent="80%" style="width: 80%" />
      <Progress name="Javascript" percent="80%" style="width: 80%" />
      <Progress name="Svelte" percent="80%" style="width: 80%" />
    </div>
    <div class="flex flex-col gap-4">
      <Progress name="React" percent="80%" style="width: 80%" />
      <Progress name="Typescript" percent="60%" style="width: 60%" />
      <Progress name="HTML" percent="80%" style="width: 80%" />
      <Progress name="CSS" percent="80%" style="width: 80%" />
      <Progress name="Bootstrap" percent="80%" style="width: 80%" />
      <Progress name="Tailwind" percent="80%" style="width: 80%" />
    </div>
  </div>
</section>
``
