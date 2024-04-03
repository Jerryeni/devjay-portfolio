<script>
  import { Button } from "flowbite-svelte";
</script>

<div
  class="bg-secondary-500 bg-center lg:h-fit bg-no-repeat w-full px-6x mt-10x max-h-[800px] md:flex flex-col-reverse items-center justify-center mt-32 lg:flex-row lg:space-x-4"
>
  <div
    class="max-lg:text-center lg:pl-20 place-self-center w-full lg:w-1/2 lg:space-y-8 text-white"
  >
    <p class="flex gap-3 lg:justify-start justify-center">
      <img src="/images/waving.png" alt="" />
      <span class="text-lg">Hi,</span>
    </p>
    <h1 class="text-[32px] md:text-[49px]">
      I'm <span
        class="bg-text_gradient px-2 font-medium bg-clip-text text-transparent"
        >Emmanuel</span
      > <br />
      A full-stack devloper
    </h1>
    <!-- <h2 class="mt-1"></h2> -->
    <p
      class="mt-2 lg:mt-6 max-lg:p-5 md:text-lg px-2  !text-primary-700 text-sm font-thin max-md:px-8 max-lg:px-16"
    >
      Passionate full-stack developer with a knack for crafting efficient and
      innovative solutions. Proficient in both front-end and back-end
      technologies, I bring creativity and technical expertise to every project.
      With a focus on clean code and user-centric design, I strive to create
      seamless digital experiences. Let's build something amazing together.
    </p>
    <div class="mt-6 lg:mt-6 flex flex-row space-x-3 lg:space-x-6 max-lg:justify-center">
      <Button
        color="light"
        class=" px-10 rounded-full bg-text_gradient py-2 lg:py-4 border-none gap-1 lg:gap-3 flex"
        >Contact me <img src="/images/arrowup2.png" alt="" class="w-2"/></Button
      >
      <Button
        color="light"
        class=" lg:px-10 px-6 rounded-full bg-text_gradient py-2 lg:py-4 border-clip-text border-border bg-clip-text text-transparent gap-1 lg:gap-3 flex"
        >Hire me <img src="/images/arrowup.png" alt="" class="w-2"  />
      </Button>
    </div>
  </div>
  <div class=" max-lg:hidden w-1/2 relative">
    <img
      src="/images/line.png"
      alt="Tech company"
      class="absolute left-0 bottom-[50%]"
    />
    <img
      src="/images/img.png"
      alt="Tech company"
      class="w-full object-contain"
    />
  </div>
</div>
<!-- <div class="lg:hidden -mt-16">
	<img src="/images/hero.svg" alt="Tech company" class="mx-auto h-[300px]" />
</div> -->

<!-- <div class="bg-[url(/images/hero-img.png)] bg-contain lg:bg-cover bg-center w-full h-[400px] xl:!h-[800px] flex flex-col items-center justify-center">
	<div
	class=" flex flex-col items-center justify-center gap-2 xl:gap-6 text-center text-white"
>
	<h1 class="text-secondary-500 tracking-widest text-[20px] md:text-[40px]">We build...</h1>
	<h2 class="text-secondary-600 tracking-widest text-[28px] md:text-[60px]">effecient technologies</h2>
	<div
		class="xl:w-2/3 font-light text-sm max-lg:p-5 md:text-xl !text-gray-100 max-md:px-8 max-lg:px-16"
	>
		We're your partner in crafting exceptional web experiences that drive success and inspire
		growth.
  </div>
	<div class="flex flex-row space-x-6 justify-center mt-4">
		<a href="#" class="px-4 py-2 md:px-6 md:py-3 bg-primary-500 text-sm rounded-[2px]">Get a Qoute</a>
		<a href="#" class="px-4 py-2 md:px-6 md:py-3 bg-secondary-500 text-sm rounded-[2px] text-primary-700">Contact Us</a>
	</div>
</div>
</div> -->
