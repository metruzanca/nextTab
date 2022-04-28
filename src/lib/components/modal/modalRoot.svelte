<!--
  @component
  Modal Root should be placed as high in the component tree
  as possible to avoid the modals appearing behind elements
-->
<script lang="ts">
  import modalStore, { type Modal } from "./modalStore";
  export let modals: Modal[];

  modals.forEach((m) => {
    modalStore.addModal(m.id, m.component);
  });
</script>

<div class="wrapper">
  {#each $modalStore as item}
    {#if item.isOpen}
      <svelte:component this={item.component} onRequestClose={item.close} />
    {/if}
  {/each}
</div>

<style>
  .wrapper {
    position: absolute;
    height: 100vh;
    width: 100vw;
    top: 0px;
    pointer-events: none;
  }
</style>
