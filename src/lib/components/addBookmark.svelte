<script lang="ts">
  import { getFormFields } from "$lib/lib/form";
  import bookmarks from "$lib/model/bookmarks";
  import Accordion from "./accordion.svelte";

  enum Fields {
    Name = "name",
    Href = "href",
  }

  type FormState = {
    [Fields.Name]: string;
    [Fields.Href]: string;
  };

  function handleSubmit(e: SubmitEvent) {
    const data = getFormFields<FormState>(e.target);
    bookmarks.addBookmark(data);
    if (e.target instanceof HTMLFormElement) {
      e.target?.reset();
    }
  }
</script>

<Accordion text="Add bookmark">
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
</Accordion>
