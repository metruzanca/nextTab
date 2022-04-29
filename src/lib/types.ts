export type Bookmark = {
  id: number;
  name: string;
  href: string;
};


export type State = {
  edit: boolean;
  // isMenuOpen: boolean;
}

export type RuntimeState = {
  meta?: {
    // loading: boolean;
    version: string;
  };
  state?: State;
}

export type UserPreferences = {
  bookmarks: Bookmark[];
}

export type App = UserPreferences & RuntimeState;

export type Modals =| 'AddBookmark' | 'Modal';

export type VoidFunction = () => void;