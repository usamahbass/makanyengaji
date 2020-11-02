<script>
  export let tafsir = "";
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
  <span class="block"></span>
  <span class="block"></span>
  <span
    class="mt-3 font-body font-light text-lg">{tafsir}</span>
</li>
