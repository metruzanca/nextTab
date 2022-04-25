<script lang="ts">
  import app from "$lib/model/app";
  import { deleteBookmark } from "$lib/model/bookmarks";

  export let name: string;
  export let href: string;
</script>

<div>
  <a {href} class="button">
    {name}
  </a>
  {#if $app.edit}
    <button
      on:click|stopPropagation={() => deleteBookmark(name)}
      class="bg-red-400 hover:bg-red-400 active:bg-red-500">X</button
    >
  {/if}
</div>
