<script>
  import bookmarks from "$lib/model/bookmarks";
  import Bookmark from "$lib/components/bookmark.svelte";
  import AddBookmark from "$lib/components/addBookmark.svelte";
  import { toggleEditMode } from "$lib/model/app";
</script>

<button on:click={toggleEditMode}> Toggle Edit </button>
<AddBookmark />

<div class="grid grid-cols-4 gap-4 mt-10">
  {#each $bookmarks as item}
    <Bookmark {...item} />
  {/each}
</div>
