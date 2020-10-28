<script>
  export let number = "";
  export let ayat = "";
</script>

<!-- 
<div class={`flex flex-wrap flex-row justify-between ${className}`}>
  <h1
    class="flex flex-col font-quran text-2xl font-medium mt-5 hover:bg-black hover:text-white">
    {ayat}
  </h1>
</div> -->
<style>
  li::before {
    content: counter(number);
    height: 32px;
    text-align: center;
    display: block;
    margin-top: -1px;
    border-radius: 100%;
    width: 32px;
    font: 700 12px/32px Helvetica, sans-serif;
    background: #000a12;
    color: #fff;
  }
</style>

<li class="block font-quran">
  <span class="block mt-5 text-right text-3xl leading-loose">{ayat}</span>
  <span class="block font-normal text-lg py-4">latin</span>
  <span class="text-lg hover:bg-black hover:text-white">arti</span>
</li>
