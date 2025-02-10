<script>
  import { Button } from "flowbite-svelte";
</script>

<div
  class="bg-secondary-500 bg-center lg:h-fit bg-no-repeat w-full px-6x mt-10x md:flex flex-col-reverse items-center justify-center mt-32 max-h-[800px] lg:flex-row lg:space-x-4"
>
  <div
    class="max-lg:text-center lg:pl-40 place-self-center w-full lg:w-1/2 lg:space-y-8 text-white"
  >
    <p class="flex gap-3 lg:justify-start justify-center">
      <img src="/images/waving.png" alt="" />
      <span class="text-lg">Hi,</span>
    </p>
    <h1 class="text-[32px] md:text-[49px]" data-aos="slide-left">
      I'm <span
        class="bg-text_gradient px-2 font-medium bg-clip-text text-transparent"
        >Jeremiah Eni</span
      > <br />
      A FullStack devloper
    </h1>
    <!-- <h2 class="mt-1"></h2> -->
    <p
      class="mt-2 lg:mt-6 max-lg:p-5 md:text-lg px-2  !text-primary-700 text-sm font-thin max-md:px-8 max-lg:px-16" data-aos="slide-right"
    >
    Passionate Fullstack Developer with a strong foundation in frontend and backend technologies. I specialize in crafting efficient, scalable, and innovative web solutions with clean code and intuitive user experiences. With an eye for design and a problem-solving mindset, I build seamless digital products that merge creativity with functionality. Let’s create something impactful together!
    </p>
    <div class="mt-6 lg:mt-6 flex flex-row space-x-3 lg:space-x-3 max-lg:justify-center">
      <Button data-aos="fade-left"
        color="light"
        class=" px-5 rounded-full bg-text_gradient py-2 lg:py-4 border-none "
        > <a href="https://wa.me/2348166314056" class="flex gap-1 lg:gap-1 h-fit" >Contact me <img src="/images/arrowup2.png" alt="" class="w-2 h-fit"/></a> </Button
      >
      <Button data-aos="fade-right"
        color="light"
        class=" lg:px-10 px-6 rounded-full bg-text_gradient py-2 lg:py-4 border-clip-text border-border bg-clip-text text-transparent gap-1 lg:gap-3 flex"
        >Hire me <img src="/images/arrowup.png" alt="" class="w-2"  />
      </Button>
    </div>
  </div>
  <div class=" max-lg:hidden w-1/2 relative">
    <img data-aos="zoom-in"
      src="/images/line.png"
      alt="Tech company"
      class="absolute left-0 bottom-[50%]"
    />
    <img data-aos="fade-in"
      src="/images/img.png"
      alt="Tech company"
      class="w-full object-contain"
    />
  </div>
</div>

