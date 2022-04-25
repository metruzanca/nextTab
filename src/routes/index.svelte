<script>
  import bookmarks from "$lib/model/bookmarks";
  import Bookmark from "$lib/components/bookmark.svelte";
  import state from "$lib/model/state";
  import { browser } from "$app/env";

  import AddBookmark from "$lib/components/addBookmark.svelte";
  import Debug from "$lib/components/debug.svelte";
</script>

<Debug />

{#if browser}
  <button on:click={state.toggleEditing}> Toggle Edit </button>
  <AddBookmark />
  <div class="grid grid-cols-4 gap-4 mt-10">
    {#each $bookmarks as item}
      <Bookmark {...item} />
    {/each}
  </div>
{/if}
