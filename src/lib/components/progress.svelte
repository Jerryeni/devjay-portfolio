<script>
    export let name= "";
    export let percent= "";
    export let style= "";
</script>

<div class="flex flex-col gap-y-2">
  <div class="flex text-white justify-between">
    <p>{name}</p>
    <p>{percent}%</p>
  </div>

  <div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
    <div class="bg-text_gradient2 h-2.5 rounded-full" style={style}></div>
  </div>
</div>
