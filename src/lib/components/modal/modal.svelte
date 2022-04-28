<script lang="ts">
  export let onRequestClose: () => void;

  function handleClick(e: MouseEvent) {
    // Only request close if the parent was clicked
    if (e.target === e.currentTarget) {
      onRequestClose();
    }
  }
</script>

<div class={`wrapper ${$$props.class && $$props.class}`} on:click={handleClick}>
  <slot>
    <div>Hello, world!</div>
  </slot>
</div>

<style>
  .wrapper {
    position: relative;
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    pointer-events: auto;
  }
</style>
