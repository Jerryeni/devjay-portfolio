<script>
  import { Button } from "flowbite-svelte";
  import ServiceCard from "./service-card.svelte";
</script>

<section class="flex lg:pl-10 flex-col gap-8 relative" id="services">
  <div class="py-4 p-6">
    <h2 class="text-[28px] lg:text-[39px] font-bold text-white text-center">
      Exceptional services that<br />
      <span class="text-secondary"> elevates your business </span>
    </h2>
  </div>
  <div
    class="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full gap-4 items-center justify-center p-6 lg:p-10 mx-auto"
  >
    <ServiceCard image="/images/web-dev.svg" title="Web Development" content="I build modern, high-performance, and responsive websites tailored to your needs. Whether it’s a personal blog, a business site, or an e-commerce platform, I create seamless and engaging web experiences."></ServiceCard>
    <ServiceCard
      image="/images/BuildingWebsite.png"
      title="Software Development"
      content="From idea to execution, I develop scalable software solutions that enhance efficiency and drive innovation. I specialize in creating reliable applications with clean code and robust functionality."
    ></ServiceCard>
    <!-- <ServiceCard title="App development"></ServiceCard> -->
    <ServiceCard image="/images/uiux.svg" title="UI/UX Design"content="A great user experience is at the heart of every successful product. I craft intuitive, visually appealing interfaces that enhance usability and engagement."></ServiceCard>
    <ServiceCard image="/images/Vector.png" title="Database Management" content="Efficient data storage and retrieval are key to any successful application. I design, optimize, and manage databases to ensure secure and scalable solutions."
    ></ServiceCard>
    <!-- <ServiceCard image="/images/cyber.svg" title="Content management system"
    ></ServiceCard> -->
    <ServiceCard image="/images/cyber.svg" title="Api Development" content="I design and build scalable APIs that power seamless interactions between applications, ensuring high performance and security in data exchange."
    ></ServiceCard>
    <ServiceCard image="/images/cyber.svg" title="Maintenance and Support" content="Your digital products need continuous monitoring and updates to stay relevant. I provide ongoing maintenance, bug fixes, and performance optimizations to keep your applications running smoothly."
    ></ServiceCard>
  </div>
</section>
