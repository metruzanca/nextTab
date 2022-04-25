<script lang="ts">
  import { dev } from "$app/env";

  function clearData() {
    localStorage.clear();
  }
</script>

{#if dev}
  <button
    class="bg-green-400 hover:bg-green-500 active:bg-green-600"
    on:click={clearData}>Clear Data</button
  >
{/if}
