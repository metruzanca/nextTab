# Changelog

## [Unreleased]

### Todo
Features that were part of [NightTab](https://www.reddit.com/r/startpages/comments/a9r6f9/inspired_by_all_the_projects_on_this_subreddit_i/)'s initial release that are missing:
- [ ] Better Bookmark styling
- [ ] Bookmark Editing
- [ ] FontAwesome Icons via Font + Css
- [ ] Header:
  - [ ] Clock
  - [ ] Basic search
    - Access search bar by pressing space
    - Using first letter of search engine to pick which to use (else default to default engine)
  - [ ] Edit Accent / main color

New Features:
- [ ] Focus is instantly grabbed by app, not the new tab's search field.
  - This way hotkeys work instantly without clicking the window
  - Custom search can be accessed by pressing spacebar
- [ ] More Mobile Friendly layout.
  - Grid will have to be modified heavily.
- [ ] Edit Hotkeys
  - Maybe start on sub-hotkeys too.


### Backlog
- Wallpaper
- Command pallette
- Webapp only: A version of this changelog on a separate route. (w/ code-splitting)
- Better modularity. I want to support changing out stuff like `<Bookmark/>` or `<BookmarkGrid/>`. This will have to come as I better understand svelte as I currently don't know how to properly pull this off. Not to mention, I need to figure out how to properly setup code-splitting for something like that in a way that doesn't effect app startup speed.

## [0.1.0] - 2022-04-29 - Usable Prototype

This first release is pretty bulky and not super organized as I've just decided to adopt a changelog. Moving forward I hope to make frequent releases following semver.

As I develop I'll keep a todo-list in the [Unreleased] section. Once I have enough there for a release, I'll make a new release. I'll also keep a backlog in the [Unreleased] just to keep track of ideas and features to be worked on in the future. In the future, good issues w/ feature requests & bug reports will also make an appearance here. As a sign of commitment on my part.

The webapp version will always have the latest canary dev release. (Maybe after [1.0.0] this will change)

At [1.0.0] I will be making a post on https://reddit.com/r/startpages. Since my main inspiration of this project is NightTab, I'd to have at least the same feature set as NightTab did when ZombieFox made his [first release](https://www.reddit.com/r/startpages/comments/a9r6f9/inspired_by_all_the_projects_on_this_subreddit_i/). However, since NextTab is all about Hotkeys, I'd like to explore the hotkey section more as well as a few other features to set it apart.

### Added
- [x] Basic Bookmark
  - Add button
  - Edit Button (to access delete)
  - Delete button
  - Basic Grid system
- [x] Basic Hotkey handler based on first letter of bookmark name
- [x] Modal Implementation
  - Add bookmark
- [x] Persistance with localStorage
  - Implemented basic state system with multiple svelte-writables to better split up app state.
  - Easy to change default config for when selfHosting.
- [x] Favicon
  - Using [FeatherIcons's Right Arrow Circle](https://github.com/feathericons/feather/blob/master/icons/arrow-right-circle.svg). (might change later)
- [x] Adopted [keepAChangelog.com](https://keepachangelog.com/en/1.0.0/) so I can better track my progress.
- Added some dev tools e.g. ability to clear user data.
- [ ] Deployment
  - Dockerfile for selfHosting.
  - Hosted static app on Netlify at https://nexttab.app
  - [ ] Extension Build Workflow
  - [ ] Publish to Firefox/Chrome


## [0.0.1] - 2022-04-23 - Initial Commit

https://NextTab.app started here.

---

<!-- [Unreleased]: https://github.com/olivierlacan/keep-a-changelog/compare/v1.0.0...HEAD -->
<!-- [0.0.1]: https://github.com/olivierlacan/keep-a-changelog/releases/tag/v0.0.1 -->