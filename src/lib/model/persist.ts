import { derived, type Readable } from "svelte/store";
import { LOCAL_STORAGE_KEY } from "$lib/config";
import { save } from "$lib/utils/localStorage";
import type { App } from "$lib/types";
import bookmarks from "./bookmarks";

// This module is responsible for updating localStorage

const derivedState = derived<Array<Readable<any>>, App>([
  bookmarks,
], ([$bookmarks], set) => {
  // Don't add optional state e.g. meta which contains loading
  set({
    bookmarks: $bookmarks,
  });
});

derivedState.subscribe(value => save(LOCAL_STORAGE_KEY, value));
