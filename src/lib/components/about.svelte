<script>
	import { Button } from 'flowbite-svelte';
</script>

<section class="w-full text-white flex flex-col px-6 lg:px-40  relative bg-primary-500 mt-0">
	<div
		class="flex flex-col lg:flex-row w-full justify-between items-center py-10 gap-8 relative  object-contain"
	>
		<div class="w-full object-fit relative md:block hidden">
			<img src="/images/line2.png" class="object-cover absolute hidden md:block right-0 bottom-[50%]" alt="man wearing glass" />
			<img src="/images/img-1.png" class="object-cover" alt="man wearing glass" />
		</div>
		<div class="lg:text-left text-center w-full">
			<h1 class="text-[32px] md:text-[49px] bg-text_gradient px-2 pb-8 font-medium bg-clip-text text-transparent">
				About me
			</h1>

			<p class=" text-md leading-8">
				Our tech hackathon is a melting pot of visionaries, and its purpose is as clear as day: to
				shape the future. Whether you're a coding genius, a design maverick, or a concept wizard,
				you'll have the chance to transform your ideas into reality. Solving real-world problems,
				pushing the boundaries of technology, and creating solutions that can change the world,
				that's what we're all about!
			</p>
			<p>&nbsp; </p>
			<p class=" text-md leading-8">
				Our tech hackathon is a melting pot of visionaries, and its purpose is as clear as day: to
				shape the future. Whether you're a coding genius, a design maverick, or a concept wizard,
				you'll have the chance to transform your ideas into reality. Solving real-world problems,
				pushing the boundaries of technology, and creating solutions that can change the world,
				that's what we're all about!
			</p>
			<div class="mt-6 lg:mt-6 flex flex-row space-x-3 lg:space-x-6 max-lg:justify-center">
				<Button
				  color="light"
				  class=" px-10 rounded-full bg-text_gradient py-3 lg:py-4 border-none gap-1 lg:gap-3 flex"
				  >Contact me <img src="/images/arrowup2.png" alt="" class="w-2"/></Button
				>
				<Button
				  color="light"
				  class=" lg:px-10 px-6 rounded-full bg-text_gradient py-3 lg:py-4 border-clip-text border-border bg-clip-text text-transparent gap-1 lg:gap-3 flex"
				  >Hire me <img src="/images/arrowup.png" alt="" class="w-2"  />
				</Button>
			  </div>
		</div>
	</div>
</section>