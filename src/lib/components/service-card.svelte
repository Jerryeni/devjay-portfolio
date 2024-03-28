<script>
  export let image = "/images/web-dev.svg";
  export let title = "Web devlopment";
  export let content = "";
</script>

<div
  class="flex relative flex-col gap-4 min-w-[380px] sm:min-w-[300px] xl:min-w-[380px] p-4 items-start hover:cursor-pointer transition-all duration-30"
>
  <div class="rounded-full object-contain w-20 h-20 overflow-hidden flex items- justify-center p-4 bg-white2">
    <img src={image} alt={title} class="object-fit" />
  </div>
  <div class="flex flex-row gap-4 items-center">
    <h5 class="text-[20px] md:text-[22px] text-white">{title}</h5>
  </div>
  <div class="text-sm text-left hover:text-white text-white opacity-90">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia voluptate commodi ipsum officiis corrupti dolorem! Ullam error recusandae non corrupti?
  </div>
</div>
