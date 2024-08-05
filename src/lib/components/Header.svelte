<script>
  import { Button } from "flowbite-svelte";
  import { onMount } from "svelte";

  let isMenuOpen = false;

  // Function to handle scroll event
  function handleScroll() {
    const header = document.getElementById("shell-header");
    if (window.scrollY > 0) {
      header?.classList.add("scrolled");
    } else {
      header?.classList.remove("scrolled");
    }
  }

  // Add scroll event listener
  onMount(() => {
    window.addEventListener("scroll", handleScroll);
  });

  // Function to toggle the mobile menu
  function toggleMenu() {
    isMenuOpen = !isMenuOpen;
  }
</script>

<header id="shell-header" class="fixed flex-none w-full left-0 right-0 top-0 z-50">
  <div class="relative z-50 bg-background text-white px-8x py-10 sm:py-4 lg:py-6 h-32 sm:px-8 lg:px-10 xl:px-28 2xl:px-40 flex flex-row justify-evenly lg:justify-between items-center transition-colors duration-300">
    <div class="w-fit">
      <a href="/" class="flex items-center">
        <span class="lg:text-2xl text-transparent bg-text_gradient2 bg-clip-text">DevJAY</span>
      </a>
    </div>
    <div class="w-full space-x-12 flex max-lg:hidden items-center justify-end text-[16px]">
      <a href="/" class="">
        <div class="">Resume</div>
      </a>
      <a href="/" class="">
        <div class="/contact">Contact</div>
      </a>
      <a href="/about">
        <div class="">About</div>
      </a>
      <a href="/about">
        <div class="">Portfolio</div>
      </a>
      <Button color="light" class="px-10 rounded-full bg-text_gradient py-3 border-border border bg-clip-text text-transparent gap-3 flex">Hire me <img src="/images/arrowup.png" alt=""> </Button>
    </div>
    <div class="w-fit md:hidden max-lg:flex max-lg:flex-row max-lg:space-x-5 lg:justify-end items-center">
      <Button color="light" class="px-8 text-nowrap rounded-full bg-text_gradient py-1 border-border border bg-clip-text text-transparent text-[12px] w-fit gap-3 flex">Hire me</Button>
      <button on:click={toggleMenu} class="text-white focus:outline-none">
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
        </svg>
      </button>
    </div>
  </div>
  <!-- <div class="{isMenuOpen ? 'fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-40 transition-opacity duration-300' : 'hidden'}" on:click={toggleMenu}></div> -->
  <div class="{isMenuOpen ? 'fixed top-0 left-0 w-64 h-full bg-background text-white z-50 transform translate-x-0 transition-transform duration-300 ease-in-out' : 'fixed top-0 left-0 w-64 h-full bg-gray-900 text-white z-50 transform -translate-x-full transition-transform duration-300 ease-in-out'}">
    <ul class="p-4">
      <li class="py-2"><a href="/" on:click={toggleMenu}>Resume</a></li>
      <li class="py-2"><a href="/" on:click={toggleMenu}>Contact</a></li>
      <li class="py-2"><a href="/about" on:click={toggleMenu}>About</a></li>
      <li class="py-2"><a href="/about" on:click={toggleMenu}>Portfolio</a></li>
    </ul>
  </div>
</header>

<style>
  /* Style for background color change */
  .scrolled {
    background-color: #0F030C; /* Change this to your desired background color */
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
</style>
