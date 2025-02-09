<script>
    import { Button } from "flowbite-svelte";
  
    export let image= "";
    export let title= "";
    export let content= "";
    export let link= "";
    
  </script>
  
  <a href={link}>
    <div class="flex flex-col text-white card gap-6 relative border rounded-md p-4 border-border/40 h-[500px]">
      <div class="object-contain relative overflow-hidden">
          <img src={image} alt={image} class="object-cover w-full h-[300px]">
      </div>
      
        <div class="flex flex-col">
            <h2 class="text-[20px] bg-text_gradient font-medium bg-clip-text text-transparent">{title}</h2>
            <p class="text-md text-white opacity-90">{content}</p>
        </div>
    
        <div class="block transition duration-200 w-fit h-fit inset-0  lg:flex flex-row space-x-6 max-lg:justify-center">
            <a
              href={link}
              class="rounded-full bg-text_gradient2 px-8 py-3 border-none gap-3 flex items-center"
              >visit <img src="/images/arrowup2.png" class="w-4 h-4" alt="" />
              </a
            >
            
        </div>
    </div>
  </a>
  
  
  <style>

.card:hover .block {
      opacity: 100;
    }
  </style>
  