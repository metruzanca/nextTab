export type Bookmark = {
  name: string;
  href: string;
};

export type AppState = {
  bookmarks: Bookmark[]
}