<script lang="ts">
  import bookmarks from "$lib/model/bookmarks";
  import state from "$lib/model/state";

  export let name: string;
  export let href: string;
  export let id: number;
</script>

<div>
  <a {href} class="button">
    {name}
  </a>
  {#if $state?.edit}
    <button
      on:click|stopPropagation={() => bookmarks.deleteBookmark({ name, id })}
      class="bg-red-400 hover:bg-red-400 active:bg-red-500">X</button
    >
  {/if}
</div>
