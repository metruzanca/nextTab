/**
 * # TODO
 * There is absolutely a better way to do this search, but I couldn't find resources on how.
 *
 * I'll look into this later. For now we'll use nightTab's implementation
 *
 */
import faIconMap from './icons';

// See https://github.com/zombieFox/nightTab/blob/main/src/component/suggest/index.js#L237
export function faSearch(searchTerm: string) {
  if (searchTerm.length === 0) {
    return faIconMap;
  }

  return faIconMap.filter((item) => {
    let match = false;

    if (
      item.name.toLowerCase().includes(searchTerm) ||
      item.label.toLowerCase().includes(searchTerm)
    ) {
      match = true;
    }

    // This can be further optimized if we change how we
    // search to allow using `continue` on the faIconMap.filter loop.

    for (const searchItem of item.search) {
      if (searchItem.toLowerCase().includes(searchTerm)) {
        match = true;
        break;
      }
    }

    for (const styleItem of item.styles) {
      if (styleItem.toLowerCase().includes(searchTerm)) {
        match = true;
        break;
      }
    }

    return match;
  });
}

