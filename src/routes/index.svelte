<script lang="ts">
  import state from "$lib/model/state";

  import AddBookmark from "$lib/components/addBookmark.svelte";
  import Debug from "$lib/components/debug.svelte";

  import modalStore from "$lib/components/modal/modalStore";
  import type { Modals } from "$lib/types";
  import BookmarkGrid from "$lib/components/bookmarkGrid.svelte";

  function openModal() {
    modalStore.open<Modals>("AddBookmark");
  }
</script>

<Debug />
<button on:click={state.toggleEditing}> Toggle Edit </button>
<AddBookmark />
<BookmarkGrid />

<button on:click={openModal}>Open Modal</button>
