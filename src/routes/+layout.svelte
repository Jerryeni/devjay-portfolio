<script>
  import Header from "$lib/components/Header.svelte";
  import { onMount } from "svelte";
  import "../app.pcss";
  import Aos from "aos";

  onMount(async () => {
    Aos.init();
  }); 

</script>
<div class="flex flex-col">
  <Header />
  <slot />  
</div>



