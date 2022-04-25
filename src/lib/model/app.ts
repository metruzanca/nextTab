import { writable } from "svelte/store";

type AppState = {
  edit?: boolean;
}

const app = writable<AppState>({});
export default app;

app.subscribe(value => {
  console.log(value)
})

export function toggleEditMode() {
  app.update(state => {
    state.edit = !(state.edit === true);
    return state;
  })
}