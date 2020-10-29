<script>
  export let ayat = "";
  export let latin = "";
  export let arti = "";
</script>

<style>
  .number-quran {
    counter-increment: number-quran-number;
  }
  .number-quran::before {
    content: counter(number-quran-number);
    height: 32px;
    text-align: center;
    display: block;
    margin-top: -1px;
    border-radius: 100%;
    width: 32px;
    font: 700 12px/32px Helvetica, sans-serif;
    background: #000000;
    color: #fff;
  }
</style>

<li class="number-quran block font-quran border-t-2 border-gray-200 py-5">
  <span class="block mt-5 text-right text-3xl leading-loose">{ayat}</span>
  <span class="block font-normal text-lg py-4">{latin}</span>
  <span
    class="font-body font-light text-lg hover:bg-black hover:text-white">{arti}</span>

  <slot />
</li>
