<script>
  export let hadist = "";
  export let arti = "";
  export let riwayat = "";
</script>

<li class="number-hadist block font-quran border-t-2 border-gray-200 py-5">
  <span class="block mt-5 text-right text-3xl leading-loose">{hadist}</span>
  <span class="font-body font-light text-lg">{arti}</span>
  <span class="border-t-2 block font-medium text-lg py-4 mt-5">{riwayat}</span>
  <slot />
</li>
