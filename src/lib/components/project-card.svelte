<script>
    import { Button } from "flowbite-svelte";
  
    export let image= "";
    export let title= "";
    export let content= "";
    export let link= "";
    
  </script>
  
  <div class="flex flex-col text-white card gap-6 relative">
    <div class="min-w-[604px] h-[453px] relative overflow-hidden">
        <img src={image} alt={image} class="object-cover w-full h-full">
    </div>
    
      <div class="flex flex-col">
          <h2 class="text-[28px] bg-text_gradient px-2 font-medium bg-clip-text text-transparent">{title}</h2>
          <p class="text-md text-white opacity-90">{content}</p>
      </div>
  
      <div class="block transition duration-200 w-fit h-fit inset-0 hidden lg:flex flex-row space-x-6 max-lg:justify-center opacity-0 transition-opacity">
          <a
            href={link}
            class="rounded-full bg-text_gradient2 px-8 py-3 border-none gap-3 flex items-center"
            >Contact me <img src="/images/arrowup2.png" class="w-4 h-4" alt="" />
            </a
          >
          <a
            href={link}
            class=" px-8 rounded-full bg-text_gradient py-3 border-clip-text border border-border bg-clip-text text-transparent  gap-3 flex"
            >Hire me <img src="/images/arrowup.png" class="w-4 h-4" alt="" />
          </a>
      </div>
  </div>
  
  <style>
    .card:hover .block {
      opacity: 100;
    }
  </style>
  