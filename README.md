# Truman Computer and Data Sciences — Website V3

Four linked web pages: `cdsc.html`, `computer-science.html`, `data-science.html`, `statistics.html`. Open `index.html` to enter the site.

## Design approach
This update returns to the V1 structure: full-width photographic heroes, strong purple and white section rhythm, four-column program facts, split research/student-experience features, gradient photographic storytelling, and coordinated calls to action. Current user-supplied photos appear in the program hero positions; selected supporting images are referenced from the original Truman content delivery site. All uploaded photography is included locally in `assets/images/`.

## Content
- CS alumni outcomes and Justin Caringal's 2025 departmental honor are supplied by the faculty user; verify alumni roles and get individuals' consent before final university publication if required by campus policy.
- Data Science program claims and stories link to published Truman pages.
- Statistics program options and the Jeonghwa Lee excerpt are from Truman's existing statistics major page.
- Student organizations: content reflects supplied club names; confirm current activity and branding before publishing.
- University logo is referenced from Truman's current WordPress theme CDN and is not bundled in the ZIP. Other version-1 supporting photos likewise load from Truman's CDN; internet access is needed for those images. The user-uploaded hero images work offline.
- This is a front-end implementation for review, not a deployment to Truman's CMS.

## Technical
Responsive HTML/CSS, accessible mobile navigation, native links, and progressive enhancement for scroll reveal with reduced-motion support. No build tools or external JavaScript packages are required.
