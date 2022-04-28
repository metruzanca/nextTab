import { writable } from "svelte/store";

export type Modal<M extends string = string> = {
  id: M;
  component: any; // SvelteComponentTyped ?
}

export type RootModal<M extends string = string> = Modal<M> & {
  isOpen: boolean;
  close: () => void;
}

const {subscribe, update, set} = writable<RootModal[]>([])

function open<M extends string>(modalId: M) {
  update(modals => {
    const index = modals.findIndex(m => m.id === modalId)
    modals[index].isOpen = true;
    return modals;
  })
}

function close<M extends string>(modalId: M) {
  update(modals => {
    const index = modals.findIndex(m => m.id === modalId)
    modals[index].isOpen = false;
    return modals;
  })
}

function addModal<M extends string>(modalId: M, component: any) {
  update(modals => [
    ...modals,
    {
      id: modalId,
      component,
      isOpen: false,
      close: () => close(modalId),
    }
  ])
}

export default {
  subscribe, set,
  open,
  close,
  addModal,
}
