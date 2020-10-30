<script>
  import { appTheme } from "../store";
  export let href = "";
  export let number = "";
  export let name = "";
</script>

<div class="w-full flex flex-wrap flex-col mt-5">
  <a
    rel="prefetch"
    {href}
    class="border-b-2 text-2xl mt-5 {$appTheme === 'terang' ? 'hover-makanye' : 'hover-makanye-black'}">{number}.
    {name}</a>
</div>
