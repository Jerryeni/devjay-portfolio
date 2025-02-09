<script>
	import { Button } from 'flowbite-svelte';
</script>

<section class="w-full text-white flex flex-col px-6 lg:px-40  relative bg-primary-500 mt-0" id="about">
	<div
		class="flex flex-col lg:flex-row w-full justify-between items-center py-10 gap-8 relative  object-contain"
	>
		<div class="w-full object-fit relative md:block">
			<img src="/images/line2.png" class="object-cover absolute md:block right-0 bottom-[50%]" alt="man wearing glass" />
			<img src="/images/img-1.png" class="object-cover" alt="man wearing glass" />
		</div>
		<div class="lg:text-left text-center w-full">
			<h1 class="text-[32px] md:text-[49px] bg-text_gradient px-2 pb-8 font-medium bg-clip-text text-transparent">
				About me
			</h1>

			<article class="font-thin text-sm">
				<p class="mb-4">Hello! I’m Jeremiah Eni, a Fullstack Developer with a background in Electronics and Computer Engineering from the University of Nigeria. My passion lies in building beautiful, functional, and scalable web experiences that merge design with seamless functionality..</p>
				<p class="mb-4">With expertise in frontend technologies like HTML, CSS, JavaScript, React.js, Next.js, Svelte, Tailwind CSS, and Bootstrap, I craft intuitive, high-performance user interfaces. I also have experience with backend technologies such as Node.js and PHP, enabling me to build fullstack applications that deliver smooth and efficient user experiences.</p>
				<p class="mb-4">My goal is to develop responsive, user-friendly web applications that not only look great but also provide an exceptional user experience. I believe in the power of well-structured code and thoughtful design to create impactful digital products.</p>
				<p class="mb-4">When I’m not coding, you’ll find me playing the guitar or piano, reading, or exploring new technologies to stay creative and inspired. I’m always open to new challenges and opportunities to grow both personally and professionally.</p>
				<p class="mb-4">I'm excited to continue growing as a developer and to create impactful web experiences that make a difference. Let’s connect and create something amazing!</p>
			</article>

			
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