<script lang="ts">
  import "../app.css";
  import "$lib/model/persist";
  import ModalRoot from "$lib/components/modal/modalRoot.svelte";
  import AddBookmarkModal from "$lib/components/addBookmarkModal.svelte";
  import Modal from "$lib/components/modal/modal.svelte";
  import { browser } from "$app/env";
</script>

{#if browser}
  <div class="">
    <slot />
  </div>
{/if}

<ModalRoot
  modals={[
    {
      id: "AddBookmark",
      component: AddBookmarkModal,
    },
  ]}
/>
