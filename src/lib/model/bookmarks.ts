import { Keybinds } from "$lib/utils/keybinds";
import type { Bookmark } from "$lib/types";
import { writable } from "svelte/store";
import appState from "./app";

const { subscribe, update } = writable<Bookmark[]>(appState.bookmarks);
Keybinds.init();

subscribe(bookmarks => {
  for(let i = 0; i < bookmarks.length; i++) {
    const err = Keybinds.register(bookmarks[i]);
    if (err) {
      // TODO make Keybinds find the next best letter to bind etc.
      console.log(`Could not assign a keybind to ${bookmarks[i].name}`);
    }
  }
})

export default {
  subscribe,
  /**
   * Adds a bookmark and registers a shortcut
   */
  addBookmark(bm: Omit<Bookmark, 'id'>) {
    update((state) => {
      const nextId = state[state.length - 1].id + 1
      const bookmark: Bookmark = {...bm, id: nextId}
      Keybinds.register(bookmark);
      return [...state, bookmark];
    })
  },
  /**
   * Remove bookmark and deregister it's shortcut
   */
  deleteBookmark({id, name}: Pick<Bookmark, 'name' | 'id'>) {
    update(state => {
      return state.filter(bm => bm.id !== id)
    })
    Keybinds.unRegister(name);
  },
}