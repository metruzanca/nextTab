<script lang="ts">
  import IconSearch from "./iconSearch.svelte";
  import Modal from "./modal/modal.svelte";

  export let onRequestClose: () => void;
</script>

<Modal {onRequestClose} class="bg-indigo-500 bg-opacity-30">
  <div
    class="w-96 h-40 bg-slate-500 border-slate-50 border-2 rounded text-white"
  >
    <IconSearch />
  </div>
</Modal>
