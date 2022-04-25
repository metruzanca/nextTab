import type { State } from "$lib/types";
import { writable } from "svelte/store";


const defaultState: State = {
  edit: false,
}

const {subscribe, update} = writable<State>(defaultState);
export default {
  subscribe,
  toggleEditing() {
    update(state => {
      state.edit = !state.edit
      return state;
    })
  }
}
