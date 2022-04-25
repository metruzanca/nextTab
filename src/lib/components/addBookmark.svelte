<script lang="ts">
  import { getFormFields } from "$lib/lib/form";
  import bookmarks, { addBookmark } from "$lib/model/bookmarks";

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
    addBookmark(data);
    if (e.target instanceof HTMLFormElement) {
      e.target?.reset();
    }
  }

  let hidden = true;
</script>

<button on:click={() => (hidden = !hidden)} class="button">
  Add bookmark
</button>

<div class={hidden ? "hidden" : ""}>
  <form
    on:submit|preventDefault={handleSubmit}
    class="flex flex-col w-1/2"
    autocomplete="off"
  >
    <label for={Fields.Name} class="text-white">Email</label>
    <input
      name={Fields.Name}
      id={Fields.Name}
      type="text"
      value=""
      class="m-1"
    />

    <label for={Fields.Name} class="text-white">Link</label>
    <input
      name={Fields.Href}
      id={Fields.Href}
      type="text"
      value=""
      class="m-1"
    />

    <button class="bg-white m-1"> Add Bookmark </button>
  </form>
</div>
