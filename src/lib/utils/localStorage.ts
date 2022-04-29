import { browser } from "$app/env";

// I don't want to deal with `if browser` everywhere.

export function load<D>(key: string): D | null {
  if (browser) {
    const storedData = localStorage.getItem(key)
    return storedData ? JSON.parse(storedData) as D : null;
  }
  return null;
}

export function save(key: string, data: any) {
  if (browser) {
    localStorage.setItem(key, JSON.stringify(data));
  }
}