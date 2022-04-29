<script lang="ts">
  import { formSubmit } from "$lib/utils/form";
  import bookmarks from "$lib/model/bookmarks";
  import { Fields, type FormState } from ".";
  import { browser } from "$app/env";

  export let onSubmit: VoidFunction;

  const handleSubmit = formSubmit((state: FormState, form) => {
    bookmarks.addBookmark(state);
    form.reset();
    onSubmit();
  });
</script>

{#if browser}
  <form
    on:submit|preventDefault={handleSubmit}
    class="flex flex-col w-1/2"
    autocomplete="off"
  >
    <label for={Fields.Name} class="text-white">Name</label>
    <input
      name={Fields.Name}
      id={Fields.Name}
      type="text"
      value=""
      class="m-1 text-black"
    />

    <label for={Fields.Name} class="text-white">Link</label>
    <input
      name={Fields.Href}
      id={Fields.Href}
      type="text"
      value=""
      class="m-1 text-black"
    />

    <button class="m-1"> Add Bookmark </button>
  </form>
{/if}
