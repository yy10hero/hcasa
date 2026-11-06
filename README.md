# Adding a new page to the HCASA website

This guide is for HCASA dev team. You add pages **in your web
browser on GitHub** — no software to install, no commands to type.

You will need:

- to be signed in to GitHub
- to have been given access to the `11tyhcasa` repository (ask the maintainer
  if you cannot see it)

Everything you need is in the repository. You will create one small text file,
and the website turns it into a page.

---

## The one idea to understand

**A folder is a web address.**

```
src/pages/summer-camp/index.md     →   https://hampshireswimming.com/summer-camp/
         └──────────┘                          └──────────┘
          folder name                          the address
```

- The folder name becomes the address on the link. `summer-camp` becomes `/summer-camp/`.
- The file inside it must always be called **`index.md`**.
- If you want a different address, you need a different folder name.

That is the whole system. Everything below is the detail.

---

## HOW TO MAKE THE PAGE!!

1. Go to the repository on GitHub.
2. Top right of the UI: Click **Add file → Create new file**.
3. Type the path: `src/pages/summer-camp/index.md` (use your own name).
4. Paste in the template below and change the title and text.
5. Click **Commit changes…**.
6. Ask the maintainer to publish, or let the automatic build run.

That is it. A new page exists. Read on for the careful version.

---

## Is it a page or a post?

| | **Page** | **Post** |
|---|---|---|
| Use for | Permanent information: About, Clubs, Records, Policies | News and announcements: results, reports, "well done" stories |
| Folder | `src/pages/` | `src/posts/` |
| Address | `/<folder-name>/` | `/posts/<folder-name>/` |
| Shows on the home page | No | **Yes**, newest first |
| Appears in Archives / Categories / Tags | No | Yes |
| Example | `/clubs/` | `/posts/county-championships-2026/` |

**Rule of thumb:** if it will still be true next year, it is a **page**. If it
is dated news, it is a **post**. This guide covers pages; posts work the same
way but live in `src/posts/` and get a few extra fields.

---

## Step 1 — Decide the address

The folder name is the address, so choose it carefully:

| Folder you create | Address of the page |
|---|---|
| `src/pages/clubs/` | `/clubs/` |
| `src/pages/summer-camp/` | `/summer-camp/` |
| `src/pages/records-2027/` | `/records-2027/` |

Rules for the name:

- all lower case
- words separated by hyphens (`-`), never spaces
- no punctuation, no accents
- short and readable — it appears in the address bar and in links

**Think before you type.** Changing the folder name later changes the address,
and any link or bookmark people saved will stop working.

---

## Step 2 — Create the page

1. Open the repository on GitHub.
2. Make sure you are on the **`main`** branch (the branch box near the top left
   says `main`).
3. Click the **Add file** button, then **Create new file**.
4. In the **"Name your file…"** box, type the whole path — for example:

   ```
   src/pages/summer-camp/index.md
   ```

   As soon as you type a `/`, GitHub creates the folder for you. You do not
   need to make folders separately.
5. Leave the large box below empty for a moment — you will paste into it next.

> If you see **"You need to be signed in"** or there is no **Add file** button,
> your account has not been given write access yet. Ask the maintainer.

---

## Step 3 — Paste the template

Copy this exactly, paste it into the big box, then change the parts in
**CAPITALS**.

```markdown
---
title: "Summer Camp 2027"
date: "2027-01-15"
slug: "summer-camp"
author: "hcasa_19"
type: "page"
---

Write your first paragraph here. Keep it short and friendly.

## A heading

You can make text **bold**, *italic*, and add [links](https://example.com).

- A bullet point
- Another bullet point
```

The block between the two `---` lines is the page's label. Keep it, keep the
spacing, and do not remove the `---` lines.

> **Do not be alarmed by the Preview tab.** GitHub's preview does not understand
> the label block, so it may look like a heading and a line. That is normal.
> The website reads it correctly.

---

## Step 4 — Write the content

The body is ordinary text with a little punctuation for formatting:

| To get | Type |
|---|---|
| A new paragraph | Leave a blank line |
| A heading | `## Your heading` |
| Bold | `**important**` |
| Italic | `*gentle emphasis*` |
| A link to another website | `[click here](https://example.com)` |
| A link to another page on our site | `[Contact us](/contact-us/)` |
| A bullet list | `- item` on its own line |
| A picture | `![description of the picture](/assets/img/pages/my-photo.jpg)` |
| A line break | End the line with two spaces |

Use the **Preview** tab above the editor to check your formatting as you type.
It shows the text, not the site's colours and menus — that is normal.

**The best trick:** open an existing page in another tab (for example
`src/pages/clubs/index.md`) and copy the way it does tables or special
layout. The site understands plain HTML too, so existing pages are good
models to follow.

---

## Step 5 — Save it (commit)

Saving on GitHub is called **committing**.

1. Click the green **Commit changes…** button in the top right.
2. In **Commit message**, write a short description, for example:

   ```
   Add Summer Camp 2027 page
   ```

3. Choose one of the two options:

   - **Commit directly to the `main` branch** — the change is saved straight
     away. Use this if your team works this way.
   - **Create a new branch for this commit and start a pull request** — the
     change is proposed and someone can check it before it is saved to `main`.
     Use this if you are asked to have your work reviewed.

4. Click **Commit changes** (or **Propose changes** if you chose a branch).

That is your page created. The repository now contains
`src/pages/summer-camp/index.md`.

> **When does it appear on the real website?** Saving the file puts it in the
> project. The live site is rebuilt from the project by the maintainer or by
> the automatic build. If you are not sure, ask. Do not assume it is live the
> moment you commit.

---

## Step 6 — Add a picture

Pictures live in their own folder, **not** in your page's folder.

### Upload the picture

1. Go to `src/assets/img/pages/` in the repository.
2. Click **Add file → Upload files**.
3. Drag your picture in, or click **choose your files**.
4. Click **Commit changes…** and save.

**Name the file carefully before uploading:** all lower case, hyphens instead of
spaces, no punctuation. For example `summer-camp-group.jpg`. Spaces in a file
name turn into `%20` in links and look messy.

Use `.jpg` for photos and `.png` for logos and diagrams. Keep photos under
about 1 MB if you can — resize them first.

### Put it on the page

Reference the picture with a path that starts with `/assets/`:

```markdown
![Children at summer camp](/assets/img/pages/summer-camp-group.jpg)
```

Or make it the picture shown above the text:

```yaml
coverImage: "/assets/img/pages/summer-camp-group.jpg"
```

**Always write a short description inside the square brackets.** It is read
aloud by screen readers and shown if the picture fails to load.

> **Common mistake:** putting the photo in `src/pages/summer-camp/`. It will
> look fine in the repository but the website will show a broken image. It must
> go in `src/assets/img/pages/`.

---

## Step 7 — Link to the page from the menu

**A new page is invisible until something links to it.** Nothing is added to
the menu automatically.

The menu is one file:

```
src/_includes/layouts/base.njk
```

1. Open that file on GitHub.
2. Click the **pencil icon** (Edit this file) in the top right.
3. Find the `<ul id="primary-menu" …>` list. It is a simple list of links.
4. Add your line in the right place.
5. Click **Commit changes…** and save.

**A new top-level menu item** — put it next to the other `nav-item` lines:

```html
<li class="nav-item"><a class="nav-link" href="/summer-camp/">Summer Camp</a></li>
```

**An item inside an existing dropdown** (for example *About*) — put it just
before that dropdown's closing `</ul>`:

```html
<li class="nav-item"><a class="nav-link" href="/summer-camp/">Summer Camp</a></li>
```

Keep the text short. The menu runs across the screen and long labels wrap badly
on phones.

> If you are not comfortable editing that file, add the link from another page
> instead, or ask the maintainer. A page with no link is not broken — it just
> cannot be found by clicking.

---

## Editing an existing page

1. Open the page's folder, then `index.md`.
2. Click the **pencil icon** (Edit this file).
3. Make your change.
4. Click **Commit changes…**.

You cannot break the page by editing the text below the `---` lines. If you
make a mistake, see [Undoing a mistake](#undoing-a-mistake).

---

## Saving a page as a draft

Put the folder inside `src/pages/_drafts/` instead of `src/pages/`:

```
src/pages/_drafts/summer-camp/index.md
```

Everything in `_drafts/` is skipped when the website is built, so you can save
work in progress without it appearing online.

When the page is ready, move it: open the file, click the pencil, and change the
path at the top from

```
src/pages/_drafts/summer-camp/index.md
```

to

```
src/pages/summer-camp/index.md
```

then commit. GitHub treats that as a move.

> **Careful:** the `draft: true` field in the label block does **not** hide a
> page in a normal folder. Use the `_drafts` folder, or the next section.

---

## Hiding a page completely

Add both of these lines to the label block:

```yaml
permalink: false
eleventyExcludeFromCollections: true
```

`permalink: false` stops the page being built at all.
`eleventyExcludeFromCollections: true` on its own only keeps the page out of the
sitemap and listings — the page still exists if someone knows the address.

---

## What the fields mean

Keep the field names exactly as written.

| Field | Required | What it does |
|---|---|---|
| `title` | **Yes** | The big heading on the page and the browser tab title. |
| `date` | Recommended | Used for sorting and the sitemap. Format `"YYYY-MM-DD"`. |
| `slug` | Recommended | Must match the folder name. The website uses the folder for the address, so keep the two identical to avoid confusion. |
| `author` | Optional | Not shown on pages. Used on posts. Default `hcasa_19`. |
| `type` | **Yes** | Keep it `"page"`. Controls how the page is shared on social media. |
| `coverImage` | Optional | A picture shown above the text: `"/assets/img/pages/photo.jpg"`. |
| `permalink` | Optional | Overrides the address. You normally do not need it. |
| `eleventyExcludeFromCollections` | Optional | Keeps the page out of the sitemap and listings. |

### Changing the address with `permalink`

You normally never need this. Use it only when the folder name cannot be the
address — for example a page that must sit under a section:

```yaml
permalink: "/artistic/about/"
```

That page can sit in `src/pages/artistic/about/index.md` and still be published
at `/artistic/about/`.

---

## Troubleshooting

| What you see | Why | Fix |
|---|---|---|
| I cannot see **Add file** | No write access to the repository | Ask the maintainer to add you as a collaborator |
| The page is a 404 | The file is not named `index.md`, or it is not inside `src/pages/` | Check the path in the address bar of your browser |
| The address is not what I wanted | The folder name is the address | Rename the folder (pencil icon → change the path) and update any links |
| Two pages fight over one address | Two folders with the same name | Rename one folder, or add a `permalink` |
| My picture is broken | Wrong folder, wrong path, or wrong capitals | File in `src/assets/img/pages/`, path starts `/assets/img/pages/`, exact spelling |
| The page does not appear in the menu | The menu is hand-written | Add the link in `src/_includes/layouts/base.njk` |
| The label block looks odd in Preview | GitHub preview does not understand the label | Ignore it; the website reads it correctly |
| A build error mentions YAML or frontmatter | A missing `---` line, a missing quote, or a tab character | Compare with the template and use spaces, never tabs |
| Someone else changed the file first | Two people saved at once | Refresh the page, make your edit again, and save |

---

## Undoing a mistake

Nothing is lost on GitHub — every save is recorded.

1. Open the file.
2. Click **History** (top right).
3. Find the version before your change.
4. Open it and copy the text back, or use the **Revert** option on the commit.

If you deleted a page by accident, tell the maintainer straight away. Deleted
pages can be restored from the history.

---

## Rules of the road

1. **Never delete a page folder to "tidy up"** unless you are sure nothing links
   to it. Old addresses may be bookmarked by swimmers and clubs.
2. **Never rename an existing folder** without checking with the maintainer —
   it changes the page's address.
3. **Never edit the exported WordPress file** (`hcasa.WordPress.2026-07-31.xml`).
   It is an archive of the old site, not a place to write content.
4. **Never edit `src/pages/pages.json` or `src/posts/posts.json`.** They hold the
   shared settings that give every page its address and layout.
5. **One page = one folder = one `index.md`.**
6. **Keep the folder name and the slug the same.**
7. **Do not upload a `.md` file loose into `src/pages/`** — every page needs its
   own folder and must be called `index.md`.

---

## Final checklist

Before you call it done:

- [ ] The folder name is lower case and hyphenated, and it is the address I want
- [ ] The file is called exactly `index.md`
- [ ] `title`, `date`, `slug`, `author` and `type: "page"` are filled in
- [ ] I used the **Preview** tab and the text reads correctly
- [ ] Any pictures are in `src/assets/img/pages/` and load when previewed
- [ ] Every picture has a written description
- [ ] The page is linked from the top menu or from another page
- [ ] No `localhost` or staging links were pasted into the text
- [ ] I clicked **Commit changes…** and can see the file in the repository

---

*If you're confused about anything, Ask the maintainer. He's always happy to help with any concerns or queries.
