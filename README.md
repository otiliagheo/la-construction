# L&A Construction — Website Starter

A responsive, five-page website built for L&A Construction, with **editable placeholders** for sample architectural images and a future gallery of homes built or renovated by the company. No framework, paid hosting, or build process is required.

## Pages

- `index.html` — home page
- `about.html` — family-run business story and two complementary roles
- `services.html` — new construction, renovation/flips, and home sales
- `projects.html` — filterable portfolio cards ready to replace
- `contact.html` — business information and inquiry form

The design files are `styles.css` and `script.js`. The photos and favicon are in `assets/`.

## Preview before publishing

Open `index.html` in a browser, then use the navigation menu. On mobile, the menu becomes a two-line icon. The project-category filters work without a server.

## What must be customized before going live

**1. Replace sample photos.** All photos are **AI-generated sample imagery used as visual placeholders**, not completed L&A Construction homes, and the gallery entries are not actual property listings. Replace files in `assets/` with real project photos using the same filenames (simplest option) or update the relevant `<img src="assets/...">` paths in the HTML files. Update each image's `alt` text too. Then remove the sample-image badges when the real photos accurately show actual projects.

**2. Replace the project gallery cards.** Edit `projects.html` and change example project titles, categories, and descriptions to match actual houses. For each listing, include only verified details, prices and statuses. The existing `data-category="new"` and `data-category="renovation"` attributes power the filters. If you change the number of cards, update the counts in the filter buttons.

**3. Set real contact details.** At the top of `script.js`, fill in:

```js
const LA_SITE = {
  businessEmail: 'your-real-business-email@example.com',
  businessPhone: 'your real business phone',
  serviceArea: 'your service area'
};
```

Only use verified information. Until a real business email is added, the form shows a clear preview-mode notice. Once set, it opens the visitor's own email app with a prefilled message. **This is not a server-backed form, does not send messages automatically, and does not store submissions.** For a true website form that sends and stores inquiries without requiring an email application, connect a legitimate form provider or backend and disclose relevant data practices.

**4. Verify marketing/legal details.** The site intentionally contains no invented staff names, licenses, project specifications, business history, addresses, testimonials, or third-party property listings. Before advertising active properties or real estate services, verify any applicable brokerage attribution, licensing/advertising and fair-housing requirements with the supervising broker or appropriate professional for your state.

**5. Customize brand copy** in the five `.html` pages and typography/colors in `styles.css` as desired. Optionally purchase a domain for the live site.

## Publish with GitHub Pages

1. Create a new **public GitHub repository** (e.g. `la-construction`) under the GitHub account that should own the website. Do **not** place the site in the old MIS 301 course repository.
2. Upload all the files and the `assets/` folder directly into the repository root—`index.html` must be at the top level.
3. In the repository, go to **Settings → Pages → Build and deployment**.
4. Choose **Deploy from a branch**, then select **main** and **/(root)**. Save.
5. The website should eventually be available at `https://YOUR-USERNAME.github.io/la-construction/` (replace username and repository name). You can add a custom domain in GitHub Pages settings later.

Because this uses relative links, it works both at a project-site path (`/la-construction/`) and a custom domain. The included empty `.nojekyll` file signals that the site is a plain static project.

## How to update a project photo

If you take a great photo of a finished kitchen, you can rename/copy it to `assets/project-kitchen.jpg` and commit it to GitHub. Every page using that path will then show the new image. Remove the relevant *placeholder* badge and revise any descriptions that no longer apply. For best results, export landscape photos around 1600px wide and compress them before upload.

## Technical notes

- Pure HTML/CSS/JS; no Node dependencies needed.
- Responsive layouts for laptop, tablet, and phone.
- Keyboard navigation, semantic headings, accessible form labels and `alt` text.
- Respects reduced-motion preferences.
- Uses Google Fonts if reachable; includes system-font fallbacks.
- Project filters and mobile navigation run locally.
- Static site hosting doesn't process form submissions by itself.
