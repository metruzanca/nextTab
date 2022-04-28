<script lang="ts">
  import bookmarks from "$lib/model/bookmarks";
  import Bookmark from "./bookmark.svelte";
</script>

<div class="grid grid-cols-4 gap-4 mt-10">
  {#each $bookmarks as item}
    <Bookmark {...item} />
  {/each}
</div>
