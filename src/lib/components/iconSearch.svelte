<script lang="ts">
  import { faSearch } from "$lib/lib/fontawesome";

  // TODO what is the correct type for this???
  function handleChange(e: any) {
    console.log(e);

    const { target }: { target: HTMLInputElement } = e;
    console.log(faSearch(target?.value));
  }
</script>

<input type="text" on:input={handleChange} />
