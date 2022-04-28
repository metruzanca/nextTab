import { LOCAL_STORAGE_KEY } from "$lib/config";
import { load } from "$lib/lib/localStorage";
import type { RuntimeState, UserPreferences } from "$lib/types";
import defaultPreferences from './_defaultPreferences.json'

export default (load(LOCAL_STORAGE_KEY) || defaultPreferences) as UserPreferences;

export const runtimeState: RuntimeState = {
  meta: {
    // FIXME get from packagejson safely see https://kit.svelte.dev/faq#env-vars
    version: '',
  }
}
