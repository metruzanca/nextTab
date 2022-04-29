import { browser } from "$app/env";
import type { Bookmark } from "$lib/types";

export class Keybinds {
  private static shortcuts: Record<string, Bookmark> = {}
  private static domHandlerRegistered = false

  private static handler(e: KeyboardEvent) {
    const bm = Keybinds.shortcuts[e.code];
    if (bm) {
      if (e.target instanceof Element && e.target?.tagName !== 'INPUT') {
        // TODO open in new tab instead
        // window.open(bm.href);
        window.location.href = bm.href;
      }
    }
  }

  static init() {
    if (!Keybinds.domHandlerRegistered) {
      Keybinds.domHandlerRegistered = true;
      if (browser) {
        document.body.addEventListener("keypress", Keybinds.handler);
      }
    }
  }

  static register(bookmark: Bookmark) {
    const key = `Key${bookmark.name[0].toUpperCase()}`
    if (!Keybinds.shortcuts[key]) {
      Keybinds.shortcuts[key] = bookmark;
      return true;
    }
    return false;
  }

  static unRegister(name: string) {
    const key = `Key${name[0].toUpperCase()}`
    delete Keybinds.shortcuts[key];
  }
}
