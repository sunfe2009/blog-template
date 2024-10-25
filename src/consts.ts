import type { AccentColors, BaseColors } from "./types";

export const SITE_TITLE = "Blog template";
export const SITE_DESCRIPTION = "Welcome to my website!";
export const SITE_FAVICON = "🙃";

// used in the footer (c) YOUR_NAME
export const NAME = "Your Name";

export const BASE = "/blog-template";

export const site = "https://flo-bit.github.io"

// how many posts to show on per paginated page (also used for tag pages)
export const POSTS_PER_PAGE = 2;

// should we show the dark mode toggle?
// (otherwise, it will be based on the user's system preferences)
export const MANUAL_DARK_MODE = true;

// should we show the search bar?
export const SEARCH_ENABLED = true;

// shade of gray for the background
// one of 'gray', 'neutral', 'stone', 'zinc', 'slate'
export const BASE_COLOR: BaseColors = "stone";

// color of links, etc.
// one of 'red', 'orange', 'amber', 'yellow', 'lime', 'green', 'emerald', 'teal',
// 'cyan', 'sky', 'blue', 'indigo', 'violet', 'purple', 'fuchsia', 'pink', 'rose'
export const ACCENT_COLOR: AccentColors = "amber";
