<script>
  import { Button, Dropdown, DropdownItem } from "flowbite-svelte";

  // Function to handle scroll event
  function handleScroll() {
    const header = document.getElementById("shell-header");
    if (window.scrollY > 0) {
      // @ts-ignore
      header.classList.add("scrolled");
    } else {
      // @ts-ignore
      header.classList.remove("scrolled");
    }
  }

  // Add scroll event listener
  // window.addEventListener("scroll", handleScroll);
</script>

<header id="shell-header" class="flex-none w-full scrolled fixed left-0 right-0 top-0 z-50">
  <div
    class="bg-transparent text-white px-8 py-10 sm:py-4 lg:py-6x h-32 sm:px-8 lg:px-10 xl:px-28 2xl:px-40 flex flex-row justify-evenly lg:justify-between items-center transition-colors duration-300"
  >
    <div class="w-fit">
      <a href="/" class="flex items-center">
        <span class="lg:text-xl text-transparent bg-text_gradient2 bg-clip-text"
          >DevEmm</span
        >
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
      <Button color="light" class=" px-10 rounded-full bg-text_gradient py-3 border-border border bg-clip-text text-transparent  gap-3 flex">Hire me <img src="/images/arrowup.png" alt=""> </Button>
    </div>
    <div class="w-fit md:hidden max-lg:flex max-lg:flex-row max-lg:space-x-5  lg:justify-end items-center">
			<Button color="light" class="px-8 text-nowrap rounded-full bg-text_gradient py-1 border-border border bg-clip-text text-transparent text-[12px] w-fit gap-3 flex">Hire me  </Button>
			<span>
				<button class="lg:hidden">
					<i class="fa-solid fa-bars text-xl md:text-2xl text-gray-500" id="" /> open
				</button>
				<Dropdown containerClass="dark:bg-text_gradient border-border z-50 border mr-40 bg-clip-text" class="w-[200px] py-4 px-2  text-transparent ">
					<DropdownItem class="text-[14px] font-extralight text-primary-600">Resume</DropdownItem>
					<DropdownItem class="text-[14px] font-extralight">Contact</DropdownItem>
					<DropdownItem class="text-[14px] font-extralight">About</DropdownItem>
					<DropdownItem class="text-[14px] font-extralight">Portfolio</DropdownItem>
				</Dropdown>
			</span> 
		</div>
  </div>
</header>
<p class="text-white">sdsdsdsds</p>

<style>
  /* Style for background color change */
  .scrolled {
    background-color: #0F030C; /* Change this to your desired background color */
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
</style>
