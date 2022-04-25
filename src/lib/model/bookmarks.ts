import { writable } from 'svelte/store';

import { browser } from '$app/env';
import { APP_NAME } from '$lib/config';
import type { Bookmark } from '$lib/types';
import defaultAppState from '$lib/model/defaultAppState.json';


const storedData = browser && localStorage.getItem(APP_NAME)
let data: Bookmark[] = [];

if (storedData) {
  data = JSON.parse(storedData);
}

const bookmarks = writable<Bookmark[]>(data);
export default bookmarks;

if (!storedData) {
  bookmarks.set(defaultAppState.bookmarks)
  // TODO Figure out how to easily support both standard deploy and read-only mode.
  // if (process.env.SELF_HOSTING) {
  //   fetch('/config.json')
  //   .then(data => data.json())
  //   .then((json: AppState) => bookmarks.set(json.bookmarks))
  //   .then(json => console.log(json))
  //   .catch(console.warn)
  // }
}

const shortcuts: Record<string, Bookmark> = {};
for (const bm of data) {
  shortcuts[`Key${bm.name[0].toUpperCase()}`] = bm;
}

bookmarks.subscribe((value) => {
  if (browser) {
    window.localStorage.setItem(APP_NAME, JSON.stringify(value));
  }
});


if (browser) {
  document.body.addEventListener("keypress", keydown);
}

function keydown(e: KeyboardEvent) {
  const bm = shortcuts[e.code];
  if (bm) {
    if (e.target instanceof Element && e.target?.tagName !== 'INPUT') {
      window.open(bm.href);
    }
  }
}

export function addBookmark(bookmark: Bookmark) {
  bookmarks.update(state => {
    shortcuts[`Key${bookmark.name[0].toUpperCase()}`] = bookmark;
    return [...state, bookmark];
  })
}

export function deleteBookmark(name: string) {
  bookmarks.update(state => {
    return state.filter(bm => bm.name !== name)
  })
  delete shortcuts[`Key${name[0].toUpperCase()}`];
}
