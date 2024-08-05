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

			<div class="font-thin text-sm">
				<p class="mb-4">Hello! I'm <strong>Jeremiah Eni</strong>, a graduate of Electronics and Computer Engineering from the University of Nigeria. I'm a frontend developer passionate about crafting beautiful and functional web experiences.</p>
				<p class="mb-4">With a background in Frontend technologies like HTML, CSS and JavaScript with modern frameworks like Reactjs, Nextjs, Sveltejs, Tailwindcss, bootstrap with nodejs and php for some backend,. I transitioned into frontend development to combine my love for technology and design. I specialize in creating responsive, user-friendly web applications using technologies like HTML, CSS, JavaScript, React.js, Next.js, Svelte, Tailwind CSS, and Bootstrap.</p>
				<p class="mb-4">My goal is to deliver exceptional user experiences that are both functional and visually appealing. I believe in the power of well-designed interfaces and efficient code to create products that users love.</p>
				<p class="mb-4">When I'm not coding, you can find me playing guiter, piano, reading, exploring new technologies, which help me stay creative and inspired. I'm always looking for new challenges and opportunities to grow both personally and professionally.</p>
				<p class="mb-4">I'm excited to continue growing as a developer and to create impactful web experiences that make a difference.</p>
			</div>

			
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