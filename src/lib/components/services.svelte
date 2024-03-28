<script>
  import { Button } from "flowbite-svelte";
  import ServiceCard from "./service-card.svelte";
</script>

<section
  class="flex lg:pl-10  flex-col gap-8  relative"
>
    <div class="py-4 p-6">
      <h2 class="text-[28px] lg:text-[39px] font-bold  text-white text-center">
        Exceptional services that<br /> <span class="text-secondary">  elevates your business </span>
      </h2>
    </div>
    <div class="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 w-full gap-4 items-center justify-center p-6 lg:p-10 mx-auto">
      <ServiceCard></ServiceCard>
      <ServiceCard image="/images/BuildingWebsite.png" title="Software Development"
      ></ServiceCard>
      <ServiceCard title="App development"></ServiceCard>
      <ServiceCard image="/images/uiux.svg" title="UI/UX design"></ServiceCard>
      <ServiceCard image="/images/graphic.svg" title="Database Management"
      ></ServiceCard>
      <ServiceCard image="/images/cyber.svg" title="Content management system"
      ></ServiceCard>
      <ServiceCard image="/images/cyber.svg" title="Api Development"
      ></ServiceCard>
      <ServiceCard image="/images/cyber.svg" title="Maintenance and Support"
      ></ServiceCard>
    </div>
  
</section>
