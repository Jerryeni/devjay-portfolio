<script>
  import { Button } from "flowbite-svelte";
  import { FloatingLabelInput, Helper } from "flowbite-svelte";
  import Input from "./input.svelte";
</script>

<div
  class="px-4 sm:px-10 py-10 lg:px-10 xl:px-20 lg:py-20 flex flex-col lg:flex-row items-center gap-6 md:gap-8 bg-[url('/images/tech.jpg')] bg-no-repeat"
>
  <div class="lg:w-1/2 w-full text-white flex flex-col relative gap-8">
    <h1 class="font-bold md:text-[32px] text-[28px] lg:text-[49px]">Let’s discuss your project</h1>
    <div class="flex gap-8 flex-col">
      <div class="flex gap-3 items-center">
        <img src="/images/contact.png" alt="" />
        <div class="flex flex-col">
          <p>Call me</p>
          <p class="font-bold">+234-814-732-9946</p>
        </div>
      </div>
      <div class="flex gap-3 items-center">
        <img src="/images/contact2.png" alt="" />
        <div class="flex flex-col">
          <p>Email</p>
          <p class="font-bold">delordemm1@gmail.com</p>
        </div>
      </div>
      <div class="flex gap-3 items-center">
        <img src="/images/contact3.png" alt="" />
        <div class="flex flex-col">
          <p>Location</p>
          <p class="font-bold">Nsukka, Enugu state, Nigeria</p>
        </div>
      </div>
    </div>
    <div class="flex gap-6">
      <img src="/images/facebook.png" alt="" />
      <img src="/images/instagram.png" alt="" />
      <img src="/images/twitter.png" alt="" />
    </div>
    <div class="">
      <img
        src="/images/ellipse.png"
        class="object-cover absolute w-full -right-40 -top-96 bottom-[50%]"
        alt="man wearing glass"
      />

      <img
        src="/images/line2.png"
        class="object-cover absolute hidden md:block right-0 bottom-[50%]"
        alt="man wearing glass"
      />
    </div>
  </div>
  <div class=" w-full lg:w-1/2">
    <div class="p-10 bg-transparent rounded-lg border space-y-8 border-border w-full lg:w-[80%]">
      <div class=" flex flex-col gap-6">
        <label for="fullname" class="text-white">Full name</label>
        <input
          type="text"
          name=""
          id=""
          placeholder="Full name"
          class="bg-inherit border py-3 px-4 border-border !rounded-[4px]"
        />
        <label for="email" class="text-white">Email</label>
        <input
          type="text"
          name=""
          id=""
          placeholder="Full name"
          class="bg-inherit border py-3 px-4 border-border !rounded-[4px]"
        />
        <label for="message" class="text-white">Message</label>
        <textarea
          name=""
          id=""
          cols="20"
          rows="5"
          placeholder="Project details"
          class="bg-inherit border py-3 px-4 border-border !rounded-[4px]"
        />
      </div>
	  <div class="flex justify-center md:justify-end w-full">
		<Button
        color="light"
        class=" px-10 rounded-full bg-text_gradient py-4 border-none gap-3 flex"
        >Send a message <img src="/images/arrowup2.png" alt="" /></Button
      >
	  </div>
      
    </div>
  </div>
</div>
