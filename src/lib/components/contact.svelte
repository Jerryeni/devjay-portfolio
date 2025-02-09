<script lang="ts">
  import emailjs from "emailjs-com";
  import { Button } from "flowbite-svelte";
  import { onMount } from "svelte";

  // Define form variables
  let form: HTMLFormElement | null = null;
  let successMessage: string = "";
  let errorMessage: string = "";

  // EmailJS credentials (Replace with your actual credentials)
  const SERVICE_ID: string = "service_pow57tf";
  const TEMPLATE_ID: string = "template_d4zqr7y";
  const PUBLIC_KEY: string = "qxDg53WUVqT7LGJnO";

  // Form submission handler
  function sendEmail(event: Event): void {
    event.preventDefault();
    successMessage = "";
    errorMessage = "";

    if (!form) return;

    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, form, PUBLIC_KEY)
      .then(
        () => {
          successMessage = "Message sent successfully! ✅";
          form?.reset();
        },
        (error) => {
          console.error("Email send error:", error);
          errorMessage = "Failed to send message. Please try again.";
        }
      );
  }
</script>

<div
  class="px-4 sm:px-10 py-10 lg:px-10 xl:px-20 lg:py-20 flex flex-col lg:flex-row items-center gap-6 md:gap-8 bg-[url('/images/tech.jpg')] bg-no-repeat"
  id="contact"
>
  <div class="lg:w-1/2 w-full text-white flex flex-col relative gap-8">
    <h1 class="font-bold md:text-[32px] text-[28px] lg:text-[49px]">
      Let’s discuss your project
    </h1>
    <div class="flex gap-8 flex-col">
      <div class="flex gap-3 items-center">
        <img src="/images/contact.png" alt="" />
        <div class="flex flex-col">
          <p>Call me</p>
          <p class="font-bold">+234-816-631-4056</p>
        </div>
      </div>
      <div class="flex gap-3 items-center">
        <img src="/images/contact2.png" alt="" />
        <div class="flex flex-col">
          <p>Email</p>
          <p class="font-bold">jerryeni3@gmail.com</p>
        </div>
      </div>
      <div class="flex gap-3 items-center">
        <img src="/images/contact3.png" alt="" />
        <div class="flex flex-col">
          <p>Location</p>
          <p class="font-bold">Onitsha, Anambra state, Nigeria</p>
        </div>
      </div>
    </div>
    <div class="flex gap-6">
      <img src="/images/facebook.png" alt="" />
      <img src="/images/instagram.png" alt="" />
      <img src="/images/twitter.png" alt="" />
    </div>
  </div>

  <!-- Contact Form -->
  <div class="w-full lg:w-1/2">
    <form
      bind:this={form}
      on:submit={sendEmail}
      class="p-10 bg-transparent rounded-lg border space-y-8 border-border/60 w-full lg:w-[80%]"
    >
      <div class="flex flex-col gap-6">
        <label for="fullname" class="text-white">Full name</label>
        <input
          type="text"
          name="name"
          required
          placeholder="Full name"
          class="bg-inherit border py-3 px-4 border-border text-white !rounded-[4px]"
        />

        <label for="email" class="text-white">Email</label>
        <input
          type="email"
          name="email"
          required
          placeholder="Email"
          class="bg-inherit border py-3 px-4 border-border text-white !rounded-[4px]"
        />

        <label for="message" class="text-white">Message</label>
        <textarea
          name="message"
          required
          cols="20"
          rows="5"
          placeholder="Project details"
          class="bg-inherit border py-3 px-4 border-border text-white !rounded-[4px]"
        ></textarea>
      </div>

      <div class="flex justify-center md:justify-end w-full">
        <Button
          type="submit"
          color="light"
          class="px-10 rounded-full bg-text_gradient py-4 border-none gap-3 flex"
        >
          Send a message <img src="/images/arrowup2.png" alt="" />
        </Button>
      </div>

      <!-- Success & Error Messages -->
      {#if successMessage}
        <p class="text-green-500 text-center">{successMessage}</p>
      {/if}
      {#if errorMessage}
        <p class="text-red-500 text-center">{errorMessage}</p>
      {/if}
    </form>
  </div>
</div>