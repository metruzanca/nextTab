<script lang="ts">
  let hidden = true;
  export let text: string;
</script>

<button on:click={() => (hidden = !hidden)} class="button">
  {text}
</button>

<div class={hidden ? "hidden" : ""}>
  <slot />
</div>
