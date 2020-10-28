<script>
  export let href = "";
  export let number = "";
  export let name = "";
</script>

<div class="w-full flex flex-wrap flex-col mt-5">
  <a
    href={`/surah/${href}`}
    class="border-b-2 text-2xl mt-5 hover:bg-black hover:text-white">{number}.
    {name}</a>
</div>
